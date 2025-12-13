import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Position {
    x: number;
    y: number;
}

interface Dot {
    id: number;
    x: number;
    y: number;
    collected: boolean;
}

interface Ghost {
    id: number;
    x: number;
    y: number;
    color: string;
}

const SEGMENT_SIZE = 18;
const DOT_SIZE = 10;
const GHOST_SIZE = 28;
const SNAKE_SPEED = 5;
const GHOST_SPEED = 2.5;
const TOTAL_DOTS = 70;  // Increased dots!
const INITIAL_LENGTH = 4;

const SnakeGame = () => {
    const [isActive, setIsActive] = useState(false);
    const [snake, setSnake] = useState<Position[]>([]);
    const [direction, setDirection] = useState<'left' | 'right' | 'up' | 'down'>('right');
    const [dots, setDots] = useState<Dot[]>([]);
    const [ghosts, setGhosts] = useState<Ghost[]>([]);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState(false);
    const [scrollOffset, setScrollOffset] = useState(0);

    const keysPressed = useRef<Set<string>>(new Set());
    const animationRef = useRef<number | null>(null);
    const snakeRef = useRef<Position[]>([]);
    const dirRef = useRef<'left' | 'right' | 'up' | 'down'>('right');

    // Get full document height
    const getDocHeight = () => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, 2500);

    // Create initial snake
    const createSnake = useCallback((): Position[] => {
        const arr: Position[] = [];
        for (let i = 0; i < INITIAL_LENGTH; i++) {
            arr.push({ x: 80 - i * SEGMENT_SIZE, y: 150 });
        }
        return arr;
    }, []);

    // Create dots across entire page
    const createDots = useCallback((): Dot[] => {
        const arr: Dot[] = [];
        const docH = getDocHeight();
        for (let i = 0; i < TOTAL_DOTS; i++) {
            arr.push({
                id: i,
                x: 60 + Math.random() * (window.innerWidth - 120),
                y: 120 + Math.random() * (docH - 200),
                collected: false,
            });
        }
        return arr;
    }, []);

    // Create ghosts spread across page
    const createGhosts = useCallback((): Ghost[] => {
        const docH = getDocHeight();
        return [
            { id: 0, x: window.innerWidth - 100, y: 250, color: '#FF0000' },
            { id: 1, x: window.innerWidth - 100, y: docH * 0.33, color: '#00FFFF' },
            { id: 2, x: 100, y: docH * 0.66, color: '#FFB8DE' },
            { id: 3, x: window.innerWidth / 2, y: docH - 300, color: '#FFB852' },
        ];
    }, []);

    // Start game
    const startGame = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        const initialSnake = createSnake();
        setSnake(initialSnake);
        snakeRef.current = initialSnake;
        setDirection('right');
        dirRef.current = 'right';
        setDots(createDots());
        setGhosts(createGhosts());
        setScore(0);
        setLives(3);
        setGameOver(false);
        setWin(false);
        setScrollOffset(0);
        setIsActive(true);
    }, [createSnake, createDots, createGhosts]);

    // End game
    const endGame = useCallback(() => {
        setIsActive(false);
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
    }, []);

    // Listen for G key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === 'g' && !isActive) startGame();
            else if (e.key === 'Escape' && isActive) endGame();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [isActive, startGame, endGame]);

    // Track key presses and set direction
    useEffect(() => {
        if (!isActive || gameOver || win) return;

        const down = (e: KeyboardEvent) => {
            if (['ArrowUp', 'w', 'W'].includes(e.key) && dirRef.current !== 'down') {
                dirRef.current = 'up';
                setDirection('up');
            }
            if (['ArrowDown', 's', 'S'].includes(e.key) && dirRef.current !== 'up') {
                dirRef.current = 'down';
                setDirection('down');
            }
            if (['ArrowLeft', 'a', 'A'].includes(e.key) && dirRef.current !== 'right') {
                dirRef.current = 'left';
                setDirection('left');
            }
            if (['ArrowRight', 'd', 'D'].includes(e.key) && dirRef.current !== 'left') {
                dirRef.current = 'right';
                setDirection('right');
            }
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'].includes(e.key)) {
                e.preventDefault();
            }
        };

        window.addEventListener('keydown', down);
        return () => window.removeEventListener('keydown', down);
    }, [isActive, gameOver, win]);

    // Track scroll
    useEffect(() => {
        if (!isActive) return;
        const onScroll = () => setScrollOffset(window.scrollY);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [isActive]);

    // Game loop
    useEffect(() => {
        if (!isActive || gameOver || win) return;

        const docH = getDocHeight();
        let lastTime = 0;
        const moveInterval = 50;

        const tick = (time: number) => {
            if (time - lastTime >= moveInterval) {
                lastTime = time;

                const currentSnake = [...snakeRef.current];
                const head = { ...currentSnake[0] };

                // Move head based on direction
                switch (dirRef.current) {
                    case 'up': head.y -= SNAKE_SPEED; break;
                    case 'down': head.y += SNAKE_SPEED; break;
                    case 'left': head.x -= SNAKE_SPEED; break;
                    case 'right': head.x += SNAKE_SPEED; break;
                }

                // Boundary check
                head.x = Math.max(10, Math.min(window.innerWidth - SEGMENT_SIZE - 10, head.x));
                head.y = Math.max(100, Math.min(docH - SEGMENT_SIZE - 50, head.y));

                // Check self-collision
                if (currentSnake.length > 10) {
                    for (let i = 5; i < currentSnake.length; i++) {
                        const seg = currentSnake[i];
                        const dx = head.x - seg.x;
                        const dy = head.y - seg.y;
                        if (Math.sqrt(dx * dx + dy * dy) < SEGMENT_SIZE * 0.6) {
                            setLives(l => {
                                if (l <= 1) { setGameOver(true); return 0; }
                                const resetSnake = createSnake();
                                snakeRef.current = resetSnake;
                                setSnake(resetSnake);
                                window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
                                return l - 1;
                            });
                            return;
                        }
                    }
                }

                // Add new head, remove tail
                const newSnake = [head, ...currentSnake.slice(0, -1)];

                // Check dot collection
                let ateFood = false;
                setDots(prevDots => {
                    const updated = prevDots.map(dot => {
                        if (dot.collected) return dot;
                        const dx = head.x + SEGMENT_SIZE / 2 - dot.x;
                        const dy = head.y + SEGMENT_SIZE / 2 - dot.y;
                        if (Math.sqrt(dx * dx + dy * dy) < SEGMENT_SIZE / 2 + DOT_SIZE + 5) {
                            ateFood = true;
                            setScore(s => s + 10);
                            return { ...dot, collected: true };
                        }
                        return dot;
                    });
                    return updated;
                });

                // Grow snake if ate food
                if (ateFood) {
                    const tail = currentSnake[currentSnake.length - 1];
                    for (let i = 0; i < 3; i++) {
                        newSnake.push({ ...tail });
                    }
                }

                snakeRef.current = newSnake;
                setSnake(newSnake);

                // Move ghosts toward snake head
                setGhosts(gs => gs.map(g => {
                    const dx = head.x - g.x;
                    const dy = head.y - g.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist > 0) {
                        return { ...g, x: g.x + (dx / dist) * GHOST_SPEED, y: g.y + (dy / dist) * GHOST_SPEED };
                    }
                    return g;
                }));

                // Check ghost collision with snake head
                for (const g of ghosts) {
                    const dx = head.x - g.x;
                    const dy = head.y - g.y;
                    if (Math.sqrt(dx * dx + dy * dy) < (SEGMENT_SIZE + GHOST_SIZE) / 2) {
                        setLives(l => {
                            if (l <= 1) { setGameOver(true); return 0; }
                            const resetSnake = createSnake();
                            snakeRef.current = resetSnake;
                            setSnake(resetSnake);
                            setGhosts(createGhosts());
                            window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
                            return l - 1;
                        });
                        break;
                    }
                }

                // Auto-scroll
                const headScreenY = head.y - window.scrollY;
                if (headScreenY < 120) window.scrollBy({ top: -15, behavior: 'instant' as ScrollBehavior });
                else if (headScreenY > window.innerHeight - 120) window.scrollBy({ top: 15, behavior: 'instant' as ScrollBehavior });

                // Check win
                setDots(d => {
                    if (d.length > 0 && d.every(dot => dot.collected)) {
                        setWin(true);
                    }
                    return d;
                });
            }

            animationRef.current = requestAnimationFrame(tick);
        };

        animationRef.current = requestAnimationFrame(tick);
        return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
    }, [isActive, gameOver, win, ghosts, createSnake, createGhosts]);

    if (!isActive) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
                {/* UI */}
                <div className="pointer-events-auto absolute bg-black/95 text-white px-4 py-3 rounded-xl font-mono shadow-xl border-2 border-green-400" style={{ top: 80, left: 16 }}>
                    <div className="text-green-400 font-bold text-lg">🐍 SNAKE</div>
                    <div className="text-green-300">SCORE: {score}</div>
                    <div className="text-red-400">LIVES: {'❤️'.repeat(lives)}</div>
                    <div className="text-green-200 text-sm">LENGTH: {snake.length}</div>
                    <div className="text-xs text-gray-400 mt-1">↑↓←→ or WASD</div>
                    <div className="text-xs text-gray-500">ESC to exit</div>
                </div>

                {/* Close */}
                <button onClick={endGame} className="pointer-events-auto absolute bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg" style={{ top: 80, right: 16 }}>
                    <X size={20} />
                </button>

                {/* Snake Body */}
                {snake.map((segment, i) => {
                    const screenY = segment.y - scrollOffset;
                    if (screenY < -30 || screenY > window.innerHeight + 30) return null;

                    const isHead = i === 0;
                    const opacity = isHead ? 1 : 0.9 - (i * 0.01);
                    const size = isHead ? SEGMENT_SIZE + 4 : SEGMENT_SIZE - Math.min(i * 0.2, 5);

                    return (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                left: segment.x,
                                top: screenY,
                                width: size,
                                height: size,
                                backgroundColor: isHead ? '#22C55E' : `hsl(${140 - i * 1.5}, 70%, ${50 - i * 0.3}%)`,
                                opacity: Math.max(opacity, 0.5),
                                boxShadow: isHead ? '0 0 15px 5px rgba(34, 197, 94, 0.6)' : '0 0 5px rgba(34, 197, 94, 0.3)',
                                zIndex: 10001 - i,
                            }}
                            initial={false}
                        >
                            {isHead && (
                                <>
                                    <div className="absolute bg-white rounded-full" style={{ width: 6, height: 6, top: 4, left: direction === 'left' ? 2 : direction === 'right' ? size - 8 : 3 }} />
                                    <div className="absolute bg-white rounded-full" style={{ width: 6, height: 6, top: 4, right: direction === 'right' ? 2 : direction === 'left' ? size - 8 : 3 }} />
                                    <div className="absolute bg-black rounded-full" style={{ width: 3, height: 3, top: 5, left: direction === 'left' ? 3 : direction === 'right' ? size - 7 : 4 }} />
                                    <div className="absolute bg-black rounded-full" style={{ width: 3, height: 3, top: 5, right: direction === 'right' ? 3 : direction === 'left' ? size - 7 : 4 }} />
                                </>
                            )}
                        </motion.div>
                    );
                })}

                {/* Ghosts */}
                {ghosts.map(g => {
                    const sy = g.y - scrollOffset;
                    if (sy < -50 || sy > window.innerHeight + 50) return null;
                    return (
                        <div key={g.id} style={{ position: 'absolute', left: g.x, top: sy, width: GHOST_SIZE, height: GHOST_SIZE, zIndex: 10002, filter: 'drop-shadow(0 0 10px rgba(255,0,0,0.8))' }}>
                            <svg viewBox="0 0 24 24" fill={g.color}>
                                <path d="M12 2C8.14 2 5 5.14 5 9v9l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2V9c0-3.86-3.14-7-7-7zm-3 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                            </svg>
                        </div>
                    );
                })}

                {/* Dots (Food) */}
                {dots.filter(d => !d.collected).map(dot => {
                    const sy = dot.y - scrollOffset;
                    if (sy < -30 || sy > window.innerHeight + 30) return null;
                    return (
                        <motion.div
                            key={dot.id}
                            className="absolute rounded-full bg-red-500"
                            style={{
                                left: dot.x - DOT_SIZE / 2,
                                top: sy - DOT_SIZE / 2,
                                width: DOT_SIZE,
                                height: DOT_SIZE,
                                boxShadow: '0 0 8px 3px rgba(239, 68, 68, 0.7)',
                                zIndex: 10000
                            }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 0.6 }}
                        />
                    );
                })}

                {/* Game Over */}
                {gameOver && (
                    <motion.div className="pointer-events-auto fixed inset-0 flex items-center justify-center bg-black/90" style={{ zIndex: 10005 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <div className="text-center">
                            <h2 className="text-5xl font-bold text-red-500 mb-4">GAME OVER</h2>
                            <p className="text-xl text-white mb-2">Final Score: {score}</p>
                            <p className="text-lg text-gray-400 mb-6">Snake Length: {snake.length}</p>
                            <div className="space-x-4">
                                <button onClick={startGame} className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg">PLAY AGAIN</button>
                                <button onClick={endGame} className="bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-lg">EXIT</button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Win */}
                {win && (
                    <motion.div className="pointer-events-auto fixed inset-0 flex items-center justify-center bg-black/90" style={{ zIndex: 10005 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <div className="text-center">
                            <h2 className="text-5xl font-bold text-green-400 mb-4">🎉 YOU WIN! 🎉</h2>
                            <p className="text-xl text-white mb-2">Final Score: {score}</p>
                            <p className="text-lg text-gray-400 mb-6">Snake Length: {snake.length}</p>
                            <div className="space-x-4">
                                <button onClick={startGame} className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg">PLAY AGAIN</button>
                                <button onClick={endGame} className="bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-lg">EXIT</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </AnimatePresence>
    );
};

export default SnakeGame;
