type HTextProps = {
  subHeader: string;
  header: string;
};

function HText({ subHeader, header }: HTextProps) {
  return (
    <div className="text-center mt-8">
      <p className="md:text-base text-sm font-normal mb-2">{subHeader}</p>
      <div className="inline-block">
        <p className="md:text-5xl text-3xl font-black">{header}</p>
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default HText;
