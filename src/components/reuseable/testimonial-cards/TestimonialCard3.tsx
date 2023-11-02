import { FC } from 'react';
import Image from 'next/image';

// =================================================
type TestimonialCard3Props = {
  name: string;
  review: string;
  shadow?: boolean;
  hideRating?: boolean;
};
// =================================================

const TestimonialCard3: FC<TestimonialCard3Props> = (props) => {
  const { name,review, hideRating, shadow } = props;

  return (
    <div className={`card ${shadow ? 'shadow-lg' : ''}`}>
      <div className="card-body">
        {!hideRating && <span className="ratings five mb-3" />}

        <blockquote className="icon mb-0">
          <p>“{review}” {name}</p>
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard3;
