import Rating from "@material-ui/lab/Rating";

export default function RateCart({ star }) {
  return (
    <>
      <Rating defaultValue={2} name={star} />
    </>
  );
}
