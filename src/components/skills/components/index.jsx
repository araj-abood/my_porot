import SkillsRating from "../../skills-rating";

function Skills() {
  return (
    <section className="mt-5">
      <h1 className="text-center text-2xl text-main-300">
        My Skills that i gained and honed through out the years
      </h1>
      <div>
        <SkillsRating numberOfStars={5} />
        <SkillsRating numberOfStars={4} />
        <SkillsRating numberOfStars={3} />
        <SkillsRating numberOfStars={2} />
        <SkillsRating numberOfStars={1} />
      </div>
    </section>
  );
}

export default Skills;
