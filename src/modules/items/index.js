const items = [{
    "title": "PC",
    "value": 520.00,
    "description": "Comprar nas americanas!",
    id: 1
},
{
    "title": "Mesa",
    "value": 200.00,
    "description": "Comprar nas americanas!",
    id: 2
}, {
    "title": "Fogão",
    "value": 5200.00,
    "description": "Comprar nas americanas!",
    id: 3
}]
let id = 3

export const create = (ctx, next) => {
    id++
    const { title, value, description } = ctx.request.body
    const item = { title, value, description, id }
    items.push(item)
    ctx.body = 'Item registrado com sucesso!'
}

export const list = (ctx, next) => {
    ctx.body = items
}

export const remove = (ctx, next) => {
    const index = (items.findIndex((item) => item.id === parseInt(ctx.request.url.split('/items/')[1])))
    if (index > -1) {
        items.splice(index, 1)
        ctx.body = { index, items }
    }
    else {
        ctx.body = 'Item não encontrado'
    }
}

export const update = (ctx, next) => {
    const index = (items.findIndex((item) => item.id === parseInt(ctx.request.url.split('/items/')[1])))
    if (index > -1) {
        if (ctx.request.body.title) {
            items[index].title = ctx.request.body.title
        }
        if (ctx.request.body.description) {
            items[index].description = ctx.request.body.description
        }
        if (ctx.request.body.value) {
            items[index].value = ctx.request.body.value
        }
        ctx.body = { detail: 'Item atualizado!', items }
    } else {
        ctx.body = { detail: 'Item não encontrado.' }
    }
}