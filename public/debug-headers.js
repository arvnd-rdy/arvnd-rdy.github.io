// Debug script to check sitemap headers
console.log('=== SITEMAP DEBUG TOOL ===');

async function debugSitemap(url, name) {
    console.log(`\n--- Testing ${name} ---`);
    console.log(`URL: ${url}`);
    
    try {
        const response = await fetch(url);
        console.log(`Status: ${response.status}`);
        console.log(`Content-Type: ${response.headers.get('content-type')}`);
        console.log(`Last-Modified: ${response.headers.get('last-modified')}`);
        console.log(`Cache-Control: ${response.headers.get('cache-control')}`);
        console.log(`All Headers:`, [...response.headers.entries()]);
        
        const text = await response.text();
        console.log(`Content Length: ${text.length} characters`);
        console.log(`Is Valid XML: ${text.trim().startsWith('<?xml')}`);
        
    } catch (error) {
        console.error(`Error testing ${name}:`, error);
    }
}

// Test all variations
debugSitemap('/sitemap.xml', 'sitemap.xml');
debugSitemap('/sitemap.txt', 'sitemap.txt');
debugSitemap('/sitemap.xml.txt', 'sitemap.xml.txt');
