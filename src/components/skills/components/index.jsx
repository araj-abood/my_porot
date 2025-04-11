import { MY_SKILLS } from "../../../constants/my-skills";
import SkillsRating from "../../skills-rating";

function Skills() {
  return (
    <section id="skills" className="mt-5">
      <h1 className="text-center text-3xl text-main-300 font-bold">
        My Skills that i gained and honed through out the years
      </h1>
      <div>
        <SkillsRating numberOfStars={5} arrayOfSkills={MY_SKILLS.master} />
        <SkillsRating numberOfStars={4} arrayOfSkills={MY_SKILLS.almostThere} />
        <SkillsRating numberOfStars={3} arrayOfSkills={MY_SKILLS.halfWay} />
        <SkillsRating numberOfStars={2} arrayOfSkills={MY_SKILLS.basic} />
        <SkillsRating numberOfStars={1} arrayOfSkills={MY_SKILLS.begineer} />
      </div>
    </section>
  );
}

export default Skills;
