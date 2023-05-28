const TEST_ISHIHARA = {
    details: {
        name: 'Colour Blindness Assesment Right Eye',
        voice_message: "Please Close your left eye and answer with your right eye",
        next_test: '/test/dyscalculia'
    },
    questions: [
        {
            "id": 1,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-1.png').default,
            "vision": {
                "normalView": 12,
                "colorBlind":{
                    "RG": 12,
                    "protonopia": 12,
                    "deutonopia": 12
                }
            }
        },
        {
            "id": 2,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-2.png').default,
            "vision": {
                "normalView": 8,
                "colorBlind":{
                    "RG": 3,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 3,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-3.png').default,
            "vision": {
                "normalView": 6,
                "colorBlind":{
                    "RG": 5,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 4,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-4.png').default,
            "vision": {
                "normalView": 29,
                "colorBlind":{
                    "RG": 70,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 5,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-5.png').default,
            "vision": {
                "normalView": 57,
                "colorBlind":{
                    "RG": 35,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 6,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-6.png').default,
            "vision": {
                "normalView": 5,
                "colorBlind":{
                    "RG": 2,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 7,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-7.png').default,
            "vision": {
                "normalView": 3,
                "colorBlind":{
                    "RG": 5,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 8,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-8.png').default,
            "vision": {
                "normalView": 15,
                "colorBlind":{
                    "RG": 17,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 9,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-9.png').default,
            "vision": {
                "normalView": 74,
                "colorBlind":{
                    "RG": 21,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 10,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-10.png').default,
            "vision": {
                "normalView": 2,
                "colorBlind":{
                    "RG": 0,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 11,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-11.png').default,
            "vision": {
                "normalView": 6,
                "colorBlind":{
                    "RG": 0,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 12,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-12.png').default,
            "vision": {
                "normalView": 97,
                "colorBlind":{
                    "RG": 0,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 13,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-13.png').default,
            "vision": {
                "normalView": 45,
                "colorBlind":{
                    "RG": 0,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 14,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-14.png').default,
            "vision": {
                "normalView": 5,
                "colorBlind":{
                    "RG": 0,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 15,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-15.png').default,
            "vision": {
                "normalView": 7,
                "colorBlind":{
                    "RG": 0,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 16,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-16.png').default,
            "vision": {
                "normalView": 16,
                "colorBlind":{
                    "RG": 0,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 17,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-17.png').default,
            "vision": {
                "normalView": 73,
                "colorBlind":{
                    "RG": 0,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 18,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-18.png').default,
            "vision": {
                "normalView": 0,
                "colorBlind":{
                    "RG": 5,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 19,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-19.png').default,
            "vision": {
                "normalView": 0,
                "colorBlind":{
                    "RG": 2,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 20,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-20.png').default,
            "vision": {
                "normalView": 0,
                "colorBlind":{
                    "RG": 45,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 21,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-21.png').default,
            "vision": {
                "normalView": 0,
                "colorBlind":{
                    "RG": 73,
                    "protonopia": 0,
                    "deutonopia": 0
                }
            }
        },
        {
            "id": 22,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-22.png').default,
            "vision": {
                "normalView": 26,
                "colorBlind":{
                    "RG": 0,
                    "protonopia": 6,
                    "deutonopia": 2
                }
            }
        },
        {
            "id": 23,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-23.png').default,
            "vision": {
                "normalView": 42,
                "colorBlind":{
                    "RG": 0,
                    "protonopia": 2,
                    "deutonopia": 4
                }
            }
        },
        {
            "id": 24,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-24.png').default,
            "vision": {
                "normalView": 35,
                "colorBlind":{
                    "RG": 0,
                    "protonopia": 5,
                    "deutonopia": 3
                }
            }
        },
        {
            "id": 25,
            "instruction": `if you don't see anything just input 0 in the field`,
            "image": require('../assets/colorblindness/plate-25.png').default,
            "vision": {
                "normalView": 96,
                "colorBlind":{
                    "RG": 0,
                    "protonopia": 6,
                    "deutonopia": 9
                }
            }
        },
    ]
}

export default TEST_ISHIHARA