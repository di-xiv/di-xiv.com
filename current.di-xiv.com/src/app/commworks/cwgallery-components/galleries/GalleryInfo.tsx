import React from "react";

interface Props {
  artistName: string;
  artistWebsite: string | null;
}

const ArtistInfo: React.FC<Props> = ({ artistName, artistWebsite }) => {
  return (
    <div id="artist-name-and-website" className="flex items-center">
      <div className="flex items-center">
        {artistWebsite && (
          <a
            href={artistWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            title={`${artistName}: ${artistWebsite}`}
          >
            <div className="flex items-center gap-x-1">
              <div className="inline-block dark:invert">
                <img
                  src="/icons/content/commworks/typcn--brush.svg"
                  className="h-8 w-1150:w-6 w-auto"
                  alt="Artist name and website"
                />
              </div>
              <h3
                className="regular w-1150:text-sm"
                aria-label={artistName}
                title={`${artistName}: ${artistWebsite}`}
              >
                {artistName}↗
              </h3>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default ArtistInfo;
