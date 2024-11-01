export default function InfoUnit({ heading, value }) {
  return (
    <div className="md:col-span-1 col-span-3 my-4">
      <p className="text-secondary text-sm font-extralight">{heading}</p>
      <h3 className="mt-2 text-medium text-[#414141] text-xl">{value}</h3>
    </div>
  );
}
