/*
gltfLoader
textureLoader
cubeTextureLoader
*/

export const sources = [
    // {
    //     name: 'environmentMap' ,
    //     typeOfLoader: 'textureLoader',
    //     path: []
    // }
    {
        name: 'portal',
        typeOfLoader: 'gltfLoader',
        path: 'models/portal/portal.glb'
    },
    {
        name: 'portalTextures',
        typeOfLoader: 'textureLoader',
        path: 'textures/portal/portal-baked.jpg'
    }
    // {
    //     name: 'environmentMap',
    //     typeOfLoader: 'cubeTextureLoader',
    //     path: [
    //         'textures/environmentMap/px.jpg',
    //         'textures/environmentMap/nx.jpg',
    //         'textures/environmentMap/py.jpg',
    //         'textures/environmentMap/ny.jpg',
    //         'textures/environmentMap/pz.jpg',
    //         'textures/environmentMap/nz.jpg',
    //     ]
    // },
    // {
    //     name: 'grassColorTexture',
    //     typeOfLoader: 'textureLoader',
    //     path: 'textures/dirt/color.jpg'
    // },
    // {
    //     name: 'grassNormalTexture',
    //     typeOfLoader: 'textureLoader',
    //     path: 'textures/dirt/normal.jpg'
    // },
    // {
    //     name: 'foxModel',
    //     typeOfLoader: 'gltfLoader',
    //     path: 'models/Fox/glTF/Fox.gltf'
    // }
]