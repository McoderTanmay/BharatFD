import FAQ from "../models/faqModel.js";
import translate from "@vitalets/google-translate-api";

const createFaq = async (req, res) =>{
    const {question, answer} = req.body;

    try {
        const question_hi = (await translate(question, {to: "hi"})).text;
        const question_bn = (await translate(question, {to: "bn"})).text;

        const answer_hi = (await translate(answer, {to: "hi"})).text;
        const answer_bn = (await translate(answer, {to: "bn"})).text;

        const faq = new FAQ({
            question,
            answer,
            translations:{
                hi:{
                    question: question_hi,
                    answer: answer_hi
                },
                bn:{
                    question: question_bn,
                    answer: answer_bn
                }
            }
        });
        faq.save();
        res.status(201).json({code: 200, status:"Success"});
    } catch (error) {
        res.status(400).json({status:"Status"});
    }
}



export { createFaq }