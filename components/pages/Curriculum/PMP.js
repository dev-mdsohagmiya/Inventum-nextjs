"use client";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { Form, useFieldAnswer } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";

registerCoreBlocks();

export default function PMP() {
  const support = useFieldAnswer("support");
  const feedback = useFieldAnswer("feedback");
  const mockexam = useFieldAnswer("mockexam");
  const futuretech = useFieldAnswer("futuretech");
  const personalgrowth = useFieldAnswer("personalgrowth");

  var tier1 = 0;
  var tier2 = 0;
  var tier3 = 0;
  function handlePackage() {
    const incrementTiers = (value, increment) => {
      switch (value) {
        case 1:
          tier1 += increment;
          break;
        case 2:
          tier2 += increment;
          break;
        case 3:
          tier3 += increment;
          break;
        default:
          break;
      }
    };

    const fieldAnswers = [
      { answer: support && support[0] ? support[0] : 0, increment: 2 },
      { answer: feedback && feedback[0] ? feedback[0] : 0, increment: 2 },
      { answer: mockexam && mockexam[0] ? mockexam[0] : 0, increment: 1 },
      { answer: futuretech && futuretech[0] ? futuretech[0] : 0, increment: 1 },
      {
        answer: personalgrowth && personalgrowth[0] ? personalgrowth[0] : 0,
        increment: 1,
      },
    ];
    fieldAnswers.forEach(({ answer, increment }) =>
      incrementTiers(answer, increment)
    );

    const max = Math.max(tier1, tier2, tier3);
    const tiers = [];
    if (max === tier1) {
      tiers.push("Tier 1");
    }
    if (max === tier2) {
      tiers.push("Tier 2");
    }
    if (max === tier3) {
      tiers.push("Tier 3");
    }
  }

  return (
    <>
      <div className="bg-dl">
        <h1 className=" w-max mx-auto text-5xl text-center py-10 font-bold bg-clip-text text-transparent bg-pg">
          Pick My Package Quiz is temporarily unavailable
        </h1>
      </div>
      <div className="bg-dl hidden">
        <h1 className=" w-max mx-auto text-5xl md:text-7xl text-center py-10 font-bold bg-clip-text text-transparent bg-pg">
          Pick My Package
        </h1>

        <p className=" text-xl text-center pb-10 text-ll max-w-7xl mx-auto">
          In order to cater for the individual needs and learning styles of all
          students, Inventum International offers packages in three different
          tiers. While all our tier levels include a comprehensive base to make
          the study experience a great success for our learners, Tier 2 and 3
          offer more dedicated study coach support, wider access to our exciting
          future technology and mindset modules and access to Mock exams. In
          addition, Tier 3 will help the students with their future study
          direction and careers by introducing career readiness assignments and
          CAT4 tests{" "}
          <a
            href="/tiers-and-fees#detailed-pricing"
            className="group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out"
          >
            {" "}
            <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              (see details here).
            </span>
          </a>
        </p>
        <div className="h-[80vh] bg-dd overflow-clip" id="pickmypackage">
          <Form
            formId="1"
            formObj={{
              blocks: [
                {
                  name: "welcome-screen",
                  id: "welcome",
                  attributes: {
                    label: "Pick My Package",
                    description:
                      "Find out which Tier suits your personal interests and learning preferences!",
                    layout: "split-right",
                    attachment: {
                      type: "image",
                      url: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80",
                    },
                  },
                },
                {
                  name: "multiple-choice",
                  id: "support",
                  attributes: {
                    required: true,
                    multiple: false,
                    verticalAlign: false,
                    label:
                      "Do you need help finding resources and/or understaning course content?",
                    choices: [
                      {
                        label: "Not often as I can work very independently.",
                        value: 1,
                      },
                      {
                        label:
                          "Sometimes, but my parents / carers can help me too.",
                        value: 2,
                      },
                      {
                        label:
                          "Yes, I would like the Inventum tutors to support me regularly. ",
                        value: 3,
                      },
                    ],
                  },
                },
                {
                  name: "multiple-choice",
                  id: "feedback",
                  attributes: {
                    required: true,
                    multiple: false,
                    verticalAlign: false,
                    label: "Is regular feedback important to you?",
                    choices: [
                      {
                        label: "Not important.",
                        value: 1,
                      },
                      {
                        label: "Somewhat important.",
                        value: 2,
                      },
                      {
                        label: "Very important.",
                        value: 3,
                      },
                    ],
                  },
                },
                {
                  name: "multiple-choice",
                  id: "mockexam",
                  attributes: {
                    required: true,
                    multiple: false,
                    verticalAlign: false,
                    label:
                      "Would you like to take test exams before sitting the actual Cambridge exams?",
                    choices: [
                      {
                        label: "No.",
                        value: 1,
                      },
                      {
                        label: "Maybe.",
                        value: 2,
                      },
                      {
                        label: "Yes. ",
                        value: 3,
                      },
                    ],
                  },
                },
                {
                  name: "multiple-choice",
                  id: "futuretech",
                  attributes: {
                    required: true,
                    multiple: false,
                    verticalAlign: false,
                    label:
                      "How interested are you learning about future technologies and their potential in our society?",
                    choices: [
                      {
                        label: "Not very interested.",
                        value: 1,
                      },
                      {
                        label: "Somewhat interested.",
                        value: 2,
                      },
                      {
                        label: "Very interested. ",
                        value: 3,
                      },
                    ],
                  },
                },
                {
                  name: "multiple-choice",
                  id: "personalgrowth",
                  attributes: {
                    required: true,
                    multiple: false,
                    verticalAlign: false,
                    label:
                      "Are you interested in developing your personal growth and mindsets and having access to online social clubs?",
                    choices: [
                      {
                        label: "Not very interested.",
                        value: 1,
                      },
                      {
                        label: "Somewhat interested.",
                        value: 2,
                      },
                      {
                        label: "Very interested. ",
                        value: 3,
                      },
                    ],
                  },
                },
                {
                  name: "statement",
                  id: "statement",
                  attributes: {
                    label: `fgs`,
                    description:
                      "Learn more about your tier in the Tiers & Fees page",
                  },
                },
              ],
              settings: {
                animationDirection: "vertical",
                disableWheelSwiping: false,
                disableNavigationArrows: false,
                disableProgressBar: false,
              },
              theme: {
                font: "",
                buttonsBgColor: "#ec4899",
                questionsColor: "#ec4899",
                answersColor: "#FFFFFF",
                buttonsFontColor: "#FFFFFF",
                buttonsBorderRadius: 25,
                errorsFontColor: "#FFFFFF",
                errorsBgColor: "#f00",
                progressBarFillColor: "#ec4899",
                progressBarBgColor: "#a855f7",
                backgroundColor: "inherit",
              },
            }}
            onSubmit={(
              formAnswers,
              { completeForm, setIsSubmitting, goToBlock, setSubmissionErr }
            ) => {
              setTimeout(() => {
                setIsSubmitting(false);
                completeForm();
                goToBlock("statement");
              }, 500);
            }}
          ></Form>
        </div>
      </div>
    </>
  );
}
