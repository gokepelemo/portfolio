export async function getPortfolio() {
    await fetch('/api/portfolio', 'GET').then(res => res.json()).then(data => {
        return data
    })
}
