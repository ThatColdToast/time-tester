export const runtime = "edge"

export const GET = async (req: Request) => {
    const start = new Date().getTime()
    const json = await (await fetch('https://dummyjson.com/users/1', { next: { revalidate: 0 }})).json()
    const end = new Date().getTime()
    const diff = end - start
    
    return new Response("Hello Edge - " + json["firstName"] + " - " + diff + "ms")
}