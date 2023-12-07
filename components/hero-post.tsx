import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <>
      <div className="card w-full h-ful glass">
        <figure>
          <img className="w-full" src={coverImage.node.sourceUrl} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
          <Avatar author={author} />
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" href={`/posts/${slug}`}>
              Read Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
