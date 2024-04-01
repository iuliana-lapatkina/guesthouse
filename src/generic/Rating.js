const Rating = ({ rate }) => {
  let rating = [];
  let count = rate;
  for (let i=0; i < 5; i++) {
    if (count > 0) {
      rating.push(<img key={i} className="fill-dimgray-200 h-[20px]" alt="" src="/star.svg" />)
    } else {
      rating.push(<img key={i} className="h-[20px]" alt="" src="/star1.svg" />)
    }
    count--;
  }

  return <div className="flex gap-[3px]" >{rating}</div>;
}

export default Rating;