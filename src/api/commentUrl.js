import instance from './baseUrl'

export const toComments = () => {
    return instance.get('/comments')
}