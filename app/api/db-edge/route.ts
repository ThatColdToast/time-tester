export const runtime = "edge"

export const GET = async (req: Request) => {
    const start = new Date().getTime()
    const json = await (await fetch('https://dummyjson.com/users/1', { cache: 'no-store' })).json()
    const end = new Date().getTime()
    const diff = end - start
    
    return new Response("Hello Edge - " + json["firstName"] + " - " + diff + "ms")
}