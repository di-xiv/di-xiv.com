import packageInfo from "../../../package.json";

const VersionDisplay = () => {
  return <p className="regular">❈&nbsp;v{packageInfo.version}</p>;
};

export default VersionDisplay;
