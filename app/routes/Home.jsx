const React = require("react");
const Link = require("react-router-dom").Link;
const TableOfContents = require("../components/TableOfContents.jsx");
const Intro = require("../components/Intro.jsx");

/* the main page for the about route of this app */
const Home = function() {
  document.title = "Collab Playbook";

  const [filterResourceType, setFilterResourceType] = React.useState({
    activity: true,
    article: true,
    framework: true
  });

  const handleFilterChange = event => {
    setFilterResourceType({
      ...filterResourceType,
      [event.target.name]: !filterResourceType[event.target.name]
    });
    console.log(event.target, filterResourceType);
  };
  return (
    <div class="container main-content">
      <div class="row">
        <div class="column">
          <h1>Collaboration Playbook</h1>

          <Intro />

          <div class="flowchart">FLOWCHART GOES HERE</div>
        </div>
      </div>

      <TableOfContents />

      <hr />

      <div class="row">
        <div class="one-third column filter-wrapper">
          <div class="filters">
            <label>Jump to</label>
            <ul>
              <li>Clarify </li>
              <li>Identify</li>
              <li>Manage</li>
              <li>Gain</li>
              <li>Work together</li>
              <li>Communicate</li>
            </ul>

            <label>Resource type</label>
            <label class="checkbox-container">
              Activity (15)
              <input
                type="checkbox"
                class="resource-checkboxes"
                id="activity"
                name="activity"
                checked={filterResourceType.activity}
                onChange={handleFilterChange}
              />
              <span class="checkmark"></span>
            </label>
            <label class="checkbox-container">
              Article (13)
              <input
                type="checkbox"
                class="resource-checkboxes"
                id="article"
                name="article"
                checked={filterResourceType.article}
                onChange={handleFilterChange}
              />
              <span class="checkmark"></span>
            </label>
            <label class="checkbox-container">
              Framework (6)
              <input
                type="checkbox"
                class="resource-checkboxes"
                id="framework"
                name="framework"
                checked={filterResourceType.framework}
                onChange={handleFilterChange}
              />
              <span class="checkmark"></span>
            </label>

            <div class="toggle-labels">Show type</div>
          </div>
        </div>
        <div class="two-thirds column">
          <div class="phases">
            <div class="phase" id="clarify">
              <div class="phase-title">
                <h3>Clarify the problem</h3>
              </div>
              <div class="phase-description">
                When the problem and expected outcome are not clear or well
                defined this causes confusion for everyone involved. Before
                collaborating with other teams and stakeholders, make sure that
                everyone on your team shares the same vision. Depending on which
                stage your team is in, aligning internally may take some time.
                If you are not able to clarify the problem within the team,
                collaborate with your researcher to gain additional insights.
              </div>

              <div class="resources">
                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.ibm.com/design/thinking/page/toolkit/activity/hopes-and-fears"
                      target="_blank"
                      class="resource-link"
                    >
                      Hopes and Fears
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    The hopes and fears activity is an effective way to gauge
                    participants’ attitudes about a project, workshop, or any
                    other collaborative engagement. “Hopes” reveal your teams’
                    expectations about what can be accomplished. “Fears” reveal
                    their doubts about making an investment to work together.
                  </div>
                </div>

                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.atlassian.com/team-playbook/plays/5-whys"
                      target="_blank"
                      class="resource-link"
                    >
                      5 Whys Analysis
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    Asking why repeatedly helps you get to the root cause of a
                    problem. This exercise will help you realise the underlying
                    problem you are truly trying to solve and will help you
                    focus on solving the right one first.
                  </div>
                </div>

                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.atlassian.com/team-playbook/plays/elevator-pitch"
                      target="_blank"
                      class="resource-link"
                    >
                      Elevator Pitch
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    An elevator pitch template helps you create a clear, concise
                    explanation of why your project, or feature exists. So
                    concise, in fact, that you could explain it during the
                    course of an elevator ride.
                  </div>
                </div>

                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.atlassian.com/team-playbook/plays/project-poster"
                      target="_blank"
                      class="resource-link"
                    >
                      Project Poster
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    Understand what problem you're solving, as well as why it
                    matters to the business and to customers. Include the
                    minimum amount of information you need to communicate what
                    you're doing, why you're doing it, how you'll measure
                    success, and your go/no-go decision.
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div class="phase" id="identify">
              <div class="phase-title">
                <h3>Identify stakeholders</h3>
              </div>

              <div class="phase-description">
                A stakeholder is an individual, department or organization that
                may be affected by the results of a project or have an effect on
                how the project is carried out. Identify the stakeholders and
                the level that they need to be involved early into the
                collaboration process in order to understand who owns what, to
                gain knowledge on the topic, to work together, and to
                communicate decisions.
              </div>

              <div class="resources">
                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.atlassian.com/team-playbook/plays/pre-mortem"
                      target="_blank"
                      class="resource-link"
                    >
                      Pre Mortem
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    Imagine all the reasons your project could turn into a
                    miserable failure. Then figure out how you can prevent those
                    problems now, while there's still time.
                  </div>
                </div>
                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.atlassian.com/team-playbook/plays/dependency-mapping"
                      target="_blank"
                      class="resource-link"
                    >
                      Dependency Mapping
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    Understand what could potentially impact your project's
                    success and create a plan to proactively manage it all.
                  </div>
                </div>
                <div
                  className={!filterResourceType.article && "hidden"}
                  class="resource article"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.productplan.com/glossary/stakeholder-analysis/"
                      target="_blank"
                      class="resource-link"
                    >
                      Stakeholder Analysis
                    </a>
                  </div>
                  <div class="resource-category-wrapper article">
                    <div class="resource-category article">Article</div>
                  </div>
                  <div class="resource-description">
                    Identify who your stakeholders are, prioritize your
                    stakeholders, and figure out how to communicate with each
                    type of stakeholder.
                  </div>
                </div>
                <div
                  className={!filterResourceType.framework && "hidden"}
                  class="resource framework"
                >
                  <div class="resource-title">
                    <a
                      href="https://mural.co/templates/manage-stakeholders-expectations"
                      target="_blank"
                      class="resource-link"
                    >
                      Mapping Stakeholder Template
                    </a>
                  </div>
                  <div class="resource-category-wrapper framework">
                    <div class="resource-category framework">Framework</div>
                  </div>
                  <div class="resource-description">
                    Template to define who should be involved and in what way
                    (keep satisfied, actively engage, monitor, keep informed).
                  </div>
                </div>
                <div
                  className={!filterResourceType.framework && "hidden"}
                  class="resource framework"
                >
                  <div class="resource-title">
                    <a
                      href="https://docs.google.com/spreadsheets/d/1IjFjwwrF0Ubtpnwyjei7zVZFblgJ6FMyVjoA21wG6U8/edit?usp=sharing"
                      target="_blank"
                      class="resource-link"
                    >
                      Stakeholder Matrix Template
                    </a>
                  </div>
                  <div class="resource-category-wrapper framework">
                    <div class="resource-category framework">Framework</div>
                  </div>
                  <div class="resource-description">
                    Template to understand what type of stakeholder each person
                    is and how to address their needs and concerns.
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div class="phase" id="manage">
              <div class="phase-title">
                <h3>Manage stakeholders</h3>
              </div>
              <div class="phase-description">
                Stakeholder alignment isn’t something that happens just once on
                your project. It’s critical that stakeholder expectations be
                consistently and frequently managed throughout the project -
                from inception to implementation - to ensure a successful
                outcome. Getting and keeping stakeholders aligned throughout the
                process is hard work. At every key point (or at regular
                intervals), don’t forget to stop, drop, align, and document.
              </div>

              <div class="resources">
                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.atlassian.com/team-playbook/plays/stakeholder-communications-plan"
                      target="_blank"
                      class="resource-link"
                    >
                      Stakeholder Communications
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    Spell out how you'll provide stakeholders with the right
                    information at the right time, and via the right channels.
                    Set up consistent, repeatable, and predictable processes
                    that define what, how, and when you are going to communicate
                    key decision points, updates, and changes.
                  </div>
                </div>

                <div
                  className={!filterResourceType.article && "hidden"}
                  class="resource article"
                >
                  <div class="resource-title">
                    <a
                      href="https://wavelength.asana.com/pyramid-clarity-strategic-alignment/"
                      target="_blank"
                      class="resource-link"
                    >
                      Pyramid of Clarity
                    </a>
                  </div>
                  <div class="resource-category-wrapper article">
                    <div class="resource-category article">Article</div>
                  </div>
                  <div class="resource-description">
                    The pyramid of clarity shows how our longer-term goals are
                    built on top of shorter-term goals. It can be used to align
                    on the high-level purpose of the work and the concrete
                    results we expect our work to produce.
                  </div>
                </div>

                <div
                  className={!filterResourceType.article && "hidden"}
                  class="resource article"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.productplan.com/communicate-roadmap-stakeholders/"
                      target="_blank"
                      class="resource-link"
                    >
                      How to Communicate Your Roadmap to Stakeholders
                    </a>
                  </div>
                  <div class="resource-category-wrapper article">
                    <div class="resource-category article">Article</div>
                  </div>
                  <div class="resource-description">
                    Outlines how to communicate with stakeholders at each stage
                    of the product lifecycle, as well as strategies on how to
                    secure stakeholder buy-in on your roadmaps.
                  </div>
                </div>

                <div
                  className={!filterResourceType.article && "hidden"}
                  class="resource article"
                >
                  <div class="resource-title">
                    <a
                      href="https://medium.com/@jmspool/attaining-a-collaborative-shared-understanding-dc70cf03f98f"
                      target="_blank"
                      class="resource-link"
                    >
                      Attaining a Collaborative Shared Understanding
                    </a>
                  </div>
                  <div class="resource-category-wrapper article">
                    <div class="resource-category article">Article</div>
                  </div>
                  <div class="resource-description">
                    Teams that attain a shared understanding are far more likely
                    to get a great design than those teams who fail to develop a
                    common perception of the project’s goals and outcome.
                  </div>
                </div>

                <div
                  className={!filterResourceType.article && "hidden"}
                  class="resource article"
                >
                  <div class="resource-title">
                    <a
                      href="https://blog.jostle.me/blog/team-alignment/"
                      target="_blank"
                      class="resource-link"
                    >
                      Share the Same Definition of Success
                    </a>
                  </div>
                  <div class="resource-category-wrapper article">
                    <div class="resource-category article">Article</div>
                  </div>
                  <div class="resource-description">
                    Take the time to ensure that everyone has the same
                    understanding of the problem to be solved, the implications
                    of the problem and the definition of a successful outcome.
                    It sounds simple, but it is not easy and this alone will
                    increase your likelihood of productive results.
                  </div>
                </div>

                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://workshopbank.com/fishbowl-discussion"
                      target="_blank"
                      class="resource-link"
                    >
                      Fishbowl Exercise
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    The fishbowl process aims to increase the understanding of a
                    large group of other people’s perspectives on an issue or
                    proposal, and to allow them to make connections and
                    recognize links that may have been hidden in a short amount
                    of time.
                  </div>
                </div>

                <div
                  className={!filterResourceType.article && "hidden"}
                  class="resource article"
                >
                  <div class="resource-title">
                    <a
                      href="https://medium.com/nyc-design/the-design-process-dilemma-how-to-align-process-problems-and-stakeholders-b3820affa733"
                      target="_blank"
                      class="resource-link"
                    >
                      The Design Process Dilemma: How to Align Process,
                      Problems, and Stakeholders
                    </a>
                  </div>
                  <div class="resource-category-wrapper article">
                    <div class="resource-category article">Article</div>
                  </div>
                  <div class="resource-description">
                    Based on if the level of agreement of the fundamental
                    problem you are trying to solve and the clarity of the
                    problem, you may need to tailor how you present your idea or
                    solution to your stakeholders.
                  </div>
                </div>

                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://workshopbank.com/culture-triangle"
                      target="_blank"
                      class="resource-link"
                    >
                      Culture Triangle
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    Culture Triangle is a motivational activity that helps teams
                    or organizations understand each other better in order to
                    improve collaboration between their units.
                  </div>
                </div>

                <div
                  className={!filterResourceType.framework && "hidden"}
                  class="resource framework"
                >
                  <div class="resource-title">
                    <a
                      href="https://docs.google.com/document/d/1-wqvP5L2O8nvl3MUroUJFCPozXZXn30nhhnw3BFen6I/edit?usp=sharing"
                      target="_blank"
                      class="resource-link"
                    >
                      Key Decision Log Template
                    </a>
                  </div>
                  <div class="resource-category-wrapper framework">
                    <div class="resource-category framework">Framework</div>
                  </div>
                  <div class="resource-description">
                    A rolling document to help you prepare for key decision
                    meetings and to record outcomes and action items.
                  </div>
                </div>

                <div
                  className={!filterResourceType.framework && "hidden"}
                  class="resource framework"
                >
                  <div class="resource-title">
                    <a
                      href="https://docs.google.com/document/d/1kt_PDiVOUU_qfl8dO8snfsijhKWJZIAuDyPqazCSQbQ/edit?usp=sharing"
                      target="_blank"
                      class="resource-link"
                    >
                      Cross Team Alignment Checklist Template
                    </a>
                  </div>
                  <div class="resource-category-wrapper framework">
                    <div class="resource-category framework">Framework</div>
                  </div>
                  <div class="resource-description">
                    A checklist to help you create a shared understanding and to
                    determine how you would like to work together with your
                    actively engaged stakeholders.
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div class="phase" id="knowledge">
              <div class="phase-title">
                <h3>Gain topic knowledge</h3>
              </div>
              <div class="phase-description">
                “There’s more and more to know in the world, and you can only
                have so much in your head. So the share of stuff you know as an
                individual is declining in any field.” When exploring an
                unfamiliar topic related to your project, it is important to
                learn from the experts. The experts are able to point you
                towards the information that you need and to connect you with
                other experts quickly. Remember that you do not have to become
                an expert, but you need to make sure you work together with the
                experts.
              </div>
              <div class="resources">
                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.atlassian.com/team-playbook/plays/learning-circle"
                      target="_blank"
                      class="resource-link"
                    >
                      Learning Circle
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    Adding structure to learning activities improves the team's
                    ability to use the knowledge immediately to improve team
                    performance.
                  </div>
                </div>
                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://designsprintkit.withgoogle.com/methodology/phase1-understand/lightning-talks"
                      target="_blank"
                      class="resource-link"
                    >
                      Lightning Talks
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    15-30 minute talks by topic experts to give an overview of
                    the business goals, research, and a technology review, if
                    relevant, and as well as anything else that may be pertinent
                    to your project.
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div class="phase" id="work-together">
              <div class="phase-title">
                <h3>Work together and get feedback</h3>
              </div>
              <div class="phase-description">
                Receiving feedback should be a productive alliance of ideas that
                elevates a solution to something better than you could have
                achieved on your own. When people work together with a shared
                vision, everyone’s efforts and expertise is combined to produce
                less duplication and overlap, increase efficiency and
                effectiveness, solve complex problems, and get projects done on
                time.
              </div>
              <div class="resources">
                <div
                  className={!filterResourceType.framework && "hidden"}
                  class="resource framework"
                >
                  <div class="resource-title">
                    <a
                      href="https://docs.google.com/document/d/1ezZqxyLb6xh_63xl9XtZvMv0QyPSXKOFcZAVK05mEYI/edit?usp=sharing"
                      target="_blank"
                      class="resource-link"
                    >
                      Questions To Guide Design Process
                    </a>
                  </div>
                  <div class="resource-category-wrapper framework">
                    <div class="resource-category framework">Framework</div>
                  </div>
                  <div class="resource-description">
                    Questions to help you think through each phase of the design
                    process (Understand & Define, Explore, Create, Learn &
                    Adapt)
                  </div>
                </div>

                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.atlassian.com/team-playbook/plays/customer-journey-mapping"
                      target="_blank"
                      class="resource-link"
                    >
                      Customer Journey Mapping
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    Understand the customer journey from a specific persona's
                    perspective so you can design a better experience. Journey
                    mapping helps you visualize how customers experience your
                    product or service, and how they feel along the way.
                  </div>
                </div>

                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.atlassian.com/team-playbook/plays/demo-trust"
                      target="_blank"
                      class="resource-link"
                    >
                      Demo Trust
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    When project teams and stakeholders see eye to eye early on,
                    it helps everyone feel confident the work being done is
                    valuable to the customer and fits into a broader strategy.
                  </div>
                </div>

                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.atlassian.com/team-playbook/plays/end-to-end-demo"
                      target="_blank"
                      class="resource-link"
                    >
                      End-to-End Demo
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    Visualize your solution so it's easier for customers and
                    stakeholders to understand what you'll deliver and provide
                    feedback. It's critical that it shows how a user discovers
                    the product, feature, or service, how they interact with it,
                    and how they leave.
                  </div>
                </div>

                <div
                  className={!filterResourceType.activity && "hidden"}
                  class="resource activity"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.ibm.com/design/thinking/page/toolkit/activity/feedback-grid"
                      target="_blank"
                      class="resource-link"
                    >
                      Feedback Grid
                    </a>
                  </div>
                  <div class="resource-category-wrapper activity">
                    <div class="resource-category activity">Activity</div>
                  </div>
                  <div class="resource-description">
                    Gather and organize feedback from users, team members, or
                    stakeholders. Use this anytime you’re trying to make sense
                    of what people are trying to tell you.
                  </div>
                </div>

                <div
                  className={!filterResourceType.article && "hidden"}
                  class="resource article"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.figma.com/blog/design-critiques-at-figma/"
                      target="_blank"
                      class="resource-link"
                    >
                      6 Different Kinds of Critiques
                    </a>
                  </div>
                  <div class="resource-category-wrapper article">
                    <div class="resource-category article">Article</div>
                  </div>
                  <div class="resource-description">
                    Outlines different kinds of critiques to use at different
                    phases of the design process and depending on what you are
                    looking to get out of the critique.
                  </div>
                </div>

                <div
                  className={!filterResourceType.article && "hidden"}
                  class="resource article"
                >
                  <div class="resource-title">
                    <a
                      href="https://trydesignlab.com/blog/how-to-ask-for-design-feedback-10-top-tips/"
                      target="_blank"
                      class="resource-link"
                    >
                      How To Ask For Design Feedback
                    </a>
                  </div>
                  <div class="resource-category-wrapper article">
                    <div class="resource-category article">Article</div>
                  </div>
                  <div class="resource-description">
                    10 tips for how to ask for feedback in a way that helps you
                    get high-quality input that can move your project forward
                  </div>
                </div>

                <div
                  className={!filterResourceType.article && "hidden"}
                  class="resource article"
                >
                  <div class="resource-title">
                    <a
                      href="https://community.uservoice.com/blog/5-smart-channels-for-gathering-feedback-from-internal-stakeholders/"
                      target="_blank"
                      class="resource-link"
                    >
                      5 Smart Channels for Gathering Feedback from Internal
                      Stakeholders
                    </a>
                  </div>
                  <div class="resource-category-wrapper article">
                    <div class="resource-category article">Article</div>
                  </div>
                  <div class="resource-description">
                    Looks at the pros and cons of 5 different communication
                    channels in order to get internal feedback
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div class="phase" id="communicate">
              <div class="phase-title">
                <h3>Communicate decisions and share learnings</h3>
              </div>
              <div class="phase-description">
                Communicating critical information, decisions, and learnings
                should not be an afterthought. If this information is not
                properly shared to the right audiences, alignment will not be
                reached, others will not be able to build on top of the project,
                and others will not learn from your successes and mistakes.
                Documenting key decisions, learnings, and follow up plans will
                help everyone stay informed and will avoid overlapping
                initiatives.
              </div>
              <div class="resources">
                <div
                  className={!filterResourceType.article && "hidden"}
                  class="resource article"
                >
                  <div class="resource-title">
                    <a
                      href="https://thedigitalprojectmanager.com/how-write-project-communication-plan/"
                      target="_blank"
                      class="resource-link"
                    >
                      Create a project communication plan
                    </a>
                  </div>
                  <div class="resource-category-wrapper article">
                    <div class="resource-category article">Article</div>
                  </div>
                  <div class="resource-description">
                    A project communication plan defines how critical
                    information, decisions, and learnings will be delivered
                    throughout the project, by who, and at what frequency. Learn
                    how to put a communication plan in place and how to use it.
                  </div>
                </div>

                <div
                  className={!filterResourceType.framework && "hidden"}
                  class="resource framework"
                >
                  <div class="resource-title">
                    <a href="" target="_blank" class="resource-link">
                      Communication Plan Template NEEDS LINK
                    </a>
                  </div>
                  <div class="resource-category-wrapper framework">
                    <div class="resource-category framework">Framework</div>
                  </div>
                  <div class="resource-description">
                    Template to help you put together what you want to share,
                    who you want to share it to, and how you will share it.
                  </div>
                </div>

                <div
                  className={!filterResourceType.article && "hidden"}
                  class="resource article"
                >
                  <div class="resource-title">
                    <a
                      href="https://thedigitalprojectmanager.com/project-management-lessons-learned-template/"
                      target="_blank"
                      class="resource-link"
                    >
                      Why & How To Document Lessons Learned
                    </a>
                  </div>
                  <div class="resource-category-wrapper article">
                    <div class="resource-category article">Article</div>
                  </div>
                  <div class="resource-description">
                    Projects can teach many valuable lessons about teams and
                    processes over time. Those insights can then be used to
                    create process change, run more efficient projects, and work
                    better as a project team.
                  </div>
                </div>

                <div
                  className={!filterResourceType.article && "hidden"}
                  class="resource article"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.pmi.org/learning/library/lessons-learned-next-level-communicating-7991"
                      target="_blank"
                      class="resource-link"
                    >
                      Lessons learned - taking it to the next level
                    </a>
                  </div>
                  <div class="resource-category-wrapper article">
                    <div class="resource-category article">Article</div>
                  </div>
                  <div class="resource-description">
                    Whether we are using lessons learned to prepare for current
                    projects or for identifying project management process
                    improvements, we learn from project failures as well as
                    project successes. By not learning from project failures we
                    are doomed to repeat similar situations
                  </div>
                </div>

                <div
                  className={!filterResourceType.article && "hidden"}
                  class="resource article"
                >
                  <div class="resource-title">
                    <a
                      href="https://www.amazon.com/Articulating-Design-Decisions-Communicate-Stakeholders/dp/1491921560/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=uxbo09-20&linkId=5e4cc3562c47b2171f0dcbe798833c49"
                      target="_blank"
                      class="resource-link"
                    >
                      Articulating Design Decisions
                    </a>
                  </div>
                  <div class="resource-category-wrapper article">
                    <div class="resource-category article">Book</div>
                  </div>
                  <div class="resource-description">
                    This practical book provides principles, tactics, and
                    actionable methods for talking about designs with
                    executives, managers, developers, marketers, and other
                    stakeholders who have influence over the project with the
                    goal of winning them over and creating the best user
                    experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Phases */}
        </div>
      </div>
    </div>
  );
};

module.exports = Home;
