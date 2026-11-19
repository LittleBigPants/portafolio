import React from "react";
import Typewriter from "typewriter-effect";
import { useLang } from "../../i18n";

function Type() {
  const { t, lang } = useLang();
  return (
    <Typewriter
      key={lang}
      options={{
        strings: t.type,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
