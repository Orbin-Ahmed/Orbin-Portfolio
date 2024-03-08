type HTextProps = {
  subHeader: string;
  header: string;
};

function HText({ subHeader, header }: HTextProps) {
  return (
    <div className="text-center mt-8">
      <p className="text-base font-normal mb-2">{subHeader}</p>
      <div className="inline-block">
        <p className="text-5xl font-black">{header}</p>
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default HText;
