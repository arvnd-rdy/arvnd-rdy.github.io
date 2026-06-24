import json

with open("repos.json", encoding="utf-8") as f:
    repos = json.load(f)

existing = {
    "walmart_and_lowblow_jobmonitor",
    "arvnd-rdy.github.io",
    "Advantage_match",
    "Eco-art",
    "Uwindsor_Ragbot",
}

print("=== ALL PUBLIC REPOS ===")
for r in sorted(repos, key=lambda x: x["updated_at"], reverse=True):
    if r.get("fork"):
        continue
    name = r["name"]
    in_portfolio = "YES" if name in existing else "NO"
    desc = (r.get("description") or "No description")[:100]
    print(f"{in_portfolio} | {name} | stars:{r['stargazers_count']} | {r.get('language')} | {desc}")
