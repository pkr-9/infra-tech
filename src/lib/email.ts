import emailjs from "@emailjs/browser";

export const sendProposal = async (data: any) => {
    return emailjs.send(
        "service_infratech",
        "template_proposal",
        {
            name: data.name,
            email: data.email,
            company: data.company,
            brief: data.brief,
            budget: data.budget,
            timeline: data.timeline,
        },
        "public_key_here"
    );
};
