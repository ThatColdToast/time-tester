export const GET = async (req: Request) => {
    const json = await (await fetch('https://dummyjson.com/users/1')).json()
    
    return new Response("Hello Server - " + json["firstName"])
}