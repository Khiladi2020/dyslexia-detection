import { getData } from "../storageManager";
import TEST_ISHIHARA from "../../data/TEST_ISHIHARA_LEFT";

const getReport = () => {
    const raw_data = getData(TEST_HANDWRITING.details.name)
    const vision_data = raw_data.questions.vision

}

export {getReport}