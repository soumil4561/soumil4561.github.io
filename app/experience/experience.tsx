import { TimelineBar } from "@/components/timeline/TimelineBar";
import { TimelineItem } from "@/components/timeline/TimelineItem";

export default function Experience() {
  const array = [
    {
      title: "This is title 1",
      subtitle: "this is subtitle 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris ante, gravida a ex vel, sodales ullamcorper quam. Morbi et ligula nec eros tempor tincidunt non pellentesque mi. Vivamus eros leo, ultrices quis accumsan eget, hendrerit sit amet augue. Duis blandit malesuada velit, ac vulputate lorem pharetra nec. Proin placerat tristique libero, vitae luctus ex laoreet at. Nullam ullamcorper, leo vel ultricies ullamcorper, ligula arcu lacinia ligula, et imperdiet ante leo mattis tortor. Sed vitae orci vitae quam aliquam pulvinar. Quisque sed ",
    },
    {
      title: "This is title 2",
      subtitle: "this is subtitle 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris ante, gravida a ex vel, sodales ullamcorper quam. Morbi et ligula nec eros tempor tincidunt non pellentesque mi. Vivamus eros leo, ultrices quis accumsan eget, hendrerit sit amet augue. Duis blandit malesuada velit, ac vulputate lorem pharetra nec. Proin placerat tristique libero, vitae luctus ex laoreet at. Nullam ullamcorper, leo vel ultricies ullamcorper, ligula arcu lacinia ligula, et imperdiet ante leo mattis tortor. Sed vitae orci vitae quam aliquam pulvinar. Quisque sed ",
    },
    {
      title: "This is title 1",
      subtitle: "this is subtitle 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris ante, gravida a ex vel, sodales ullamcorper quam. Morbi et ligula nec eros tempor tincidunt non pellentesque mi. Vivamus eros leo, ultrices quis accumsan eget, hendrerit sit amet augue. Duis blandit malesuada velit, ac vulputate lorem pharetra nec. Proin placerat tristique libero, vitae luctus ex laoreet at. Nullam ullamcorper, leo vel ultricies ullamcorper, ligula arcu lacinia ligula, et imperdiet ante leo mattis tortor. Sed vitae orci vitae quam aliquam pulvinar. Quisque sed ",
    },
    {
      title: "This is title 1",
      subtitle: "this is subtitle 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris ante, gravida a ex vel, sodales ullamcorper quam. Morbi et ligula nec eros tempor tincidunt non pellentesque mi. Vivamus eros leo, ultrices quis accumsan eget, hendrerit sit amet augue. Duis blandit malesuada velit, ac vulputate lorem pharetra nec. Proin placerat tristique libero, vitae luctus ex laoreet at. Nullam ullamcorper, leo vel ultricies ullamcorper, ligula arcu lacinia ligula, et imperdiet ante leo mattis tortor. Sed vitae orci vitae quam aliquam pulvinar. Quisque sed ",
    },
    {
      title: "This is title 1",
      subtitle: "this is subtitle 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris ante, gravida a ex vel, sodales ullamcorper quam. Morbi et ligula nec eros tempor tincidunt non pellentesque mi. Vivamus eros leo, ultrices quis accumsan eget, hendrerit sit amet augue. Duis blandit malesuada velit, ac vulputate lorem pharetra nec. Proin placerat tristique libero, vitae luctus ex laoreet at. Nullam ullamcorper, leo vel ultricies ullamcorper, ligula arcu lacinia ligula, et imperdiet ante leo mattis tortor. Sed vitae orci vitae quam aliquam pulvinar. Quisque sed ",
    },
  ];

  return (
    <section className="section">
      <div className="page-heading">Experience</div>
      <div className="page-heading-subtitle">My journey so far</div>

      <div className="relative w-full flex flex-col justify-between">
        {/* Timeline vertical line */}
        <TimelineBar />

        {/* Dots + cards */}
        {array.map((item, i) => (
          <div key={i} className="relative flex items-center">
            <TimelineItem details={item} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
