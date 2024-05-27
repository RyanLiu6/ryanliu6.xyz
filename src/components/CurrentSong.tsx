import { useEffect } from "react";

import { getNowPlaying, test } from "@/lib/spotify";
import IconedPopover from "@/components/common/Popover";

const CurrentSong = () => {
  useEffect(() => {
    const result = test();
    // console.log(result);
  });

  return (
    <IconedPopover icon="spotify">
      <div>
        asdfasdfasdf
      </div>
    </IconedPopover>
  )
}

export default CurrentSong;
