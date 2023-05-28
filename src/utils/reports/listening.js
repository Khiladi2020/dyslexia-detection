import {getData} from '../storageManager'
import TEST_LISTENING from '../../data/TEST_LISTENING'

const getReport = ()=> {
    const raw_data = getData(TEST_LISTENING.details.name)

    const questions_phono = Object.values(raw_data.questions)
        .filter(val => val.questionType === 'phonological awareness')
    
    const questions_memory = Object.values(raw_data.questions)
        .filter(val => val.questionType === 'memory')
        
    const correct_phono = questions_phono.filter(val => val.isUserResponseValid).length
    const correct_memory = questions_memory.filter(val => val.isUserResponseValid).length

    return {
        phono_test: {
            correct: correct_phono,
            total: questions_phono.length
        },
        memory_test: {
            correct: correct_memory,
            total: questions_memory.length
        },
    }
}

export {getReport}