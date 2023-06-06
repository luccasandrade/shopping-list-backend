import { prisma } from "../../data/index.js"


export const create = async (ctx, next) => {
    const { name, value, description } = ctx.request.body

    try {
        const newItem = await prisma.item.create({
            data: {
                name,
                value,
                description
            },
        })
        ctx.body = 'Item registrado com sucesso!'
    } catch (error) {
        console.log("🚀 ~ error:", error)
        ctx.body = 'Erro ao registrar item.'
    }
}

export const list = async (ctx, next) => {
    try {
        const allItems = await prisma.item.findMany()
        ctx.body = allItems
    } catch (error) {
        console.log("🚀 ~ error:", error)
        ctx.body = 'Erro ao acessar banco de dados.'
    }
}

export const remove = async (ctx, next) => {

    try {
        const itemId = parseInt(ctx.request.params.id)
        await prisma.item.delete({
            where: {
                id: itemId
            }
        })
        ctx.body = 'Item deletado.'
    } catch (error) {
        console.log("🚀 ~ error:", error)
        ctx.body = 'Não foi possível deletar o item.'
    }
}

export const update = async (ctx, next) => {

    try {
        const { name, value, description } = ctx.request.body
        const itemId = parseInt(ctx.request.params.id)
        const updatedItem = await prisma.item.update({
            where: {
                id: itemId
            },
            data: {
                name: name,
                value: value,
                description: description
            }
        })
        ctx.body = 'Item atualizado.'
    } catch (error) {
        console.log("🚀 ~ error:", error)
        ctx.body = 'Não foi possível atualizar o item.'
    }
}