export function normalName(episode, name) {
    let normalEpisode = episode.replace(/\./g, " ");
    normalEpisode = normalEpisode.replace(/\[ettv]/g, "");
    normalEpisode = normalEpisode.replace(/mp4/g, "");
    normalEpisode = normalEpisode.replace(/mkv/g, "");
    normalEpisode = normalEpisode.replace(/HDTV/g, "");
    normalEpisode = normalEpisode.replace(/x264-.*/ig, "");
    normalEpisode = normalEpisode.replace("HEVC-PSA", "");
    normalEpisode = normalEpisode.replace("hdtv-lol", "");
    normalEpisode = normalEpisode.replace("x265", "");
    normalEpisode = normalEpisode.replace("2014", "");
    normalEpisode = normalEpisode.replace("2015", "");
    normalEpisode = normalEpisode.replace("2016", "");
    normalEpisode = normalEpisode.replace(/2CH/ig, "");
    normalEpisode = normalEpisode.replace(/6CH/ig, "");
    normalEpisode = normalEpisode.replace(/720p/ig, "");
    normalEpisode = normalEpisode.replace(/1080p/ig, "");
    normalEpisode = normalEpisode.replace("HAAC2-Sunil-KITE-METeam", "");
    normalEpisode = normalEpisode.replace("Subs", "");
    normalEpisode = normalEpisode.replace(/\[GWC]/ig, "");
    let reg = new RegExp(name, 'ig')
    normalEpisode = normalEpisode.replace(reg, "");

    if(!normalEpisode.includes("S")) {
      normalEpisode = normalEpisode.trim();
      normalEpisode = 
      "S0" + normalEpisode.substring(0, normalEpisode.length/2) +
      hasZero(normalEpisode) +
      normalEpisode.substring(normalEpisode.length/2, normalEpisode.length+1);

    }
    function hasZero(episode) {
      return (
        normalEpisode.charAt(normalEpisode.length/2) === "0" 
        || normalEpisode.substring(normalEpisode.length/2, normalEpisode.length).length >= 2) 
        ? "E" : "E0";
    }


    if(normalEpisode.includes("srt") || normalEpisode.includes("txt")) {
      normalEpisode = "Prevod"
    }

    normalEpisode = normalEpisode.replace(/ /g, "");
    normalEpisode = normalEpisode.replace(/x/ig, "");

    if(normalEpisode.includes("-")) {
        const splitEpisode = normalEpisode.split("-");
        const firstEpisode = splitEpisode[0];
        const secondEpisode = firstEpisode.substring(0, 3) + splitEpisode[1];
        normalEpisode = secondEpisode;
    }
    return normalEpisode !== "Prevod" && normalEpisode;
  }