import React from "react";

import { homeImages } from "../../helpers/homeImages";
import { Section } from "./Section";

export const HomeScreen = () => {
  return (
    <>
      {/* Transcribe tus audios de la manera mas facil */}
      <Section
        title="Transcribe tus audios de la manera mas facil."
        paragraphs={[
          "Crea subtitulos de una forma en la cual no tendras que preocuparte por perder tiempo en volver a escribir lo que ya expresaste.",
        ]}
        imgURL={homeImages("./Podcast.png").default}
      />

      <h2 className="text-center display-4 mb-5">
        <b>¿Por que [TITULO]?</b>
      </h2>

      {/* Los pequeños detalles */}
      <Section
        title="Los pequeños detalles"
        paragraphs={[
          "La creacion de subtitulos es algo que no muchos videos tienen y que hace lucir tu contenido mas profesional ademas de que son de ayuda para tu publico.",
          "[TITULO] te ofrece la facilidad de poder darle ese detalle profesional a tu video para darle un mejor contenido a tu publico.",
        ]}
        imgURL={homeImages("./Like.png").default}
      />

      {/* Tu tiempo es importante */}
      <Section
        title="Tu tiempo es importante"
        paragraphs={[
          "Comprendemos que la creacion de contenido audiovisual es una cuestion de dedicacion y sobre todo de tu tiempo, por esa razon en muchas ocacaciones los creadores de contenido optan por omitir la creacion de subtitulos.",
          "El proposito de [TITULO] es el de agilizar este proceso y que tu contenido pueda salir a tiempo ademas de ahorrar el tuyo.",
        ]}
        imgURL={homeImages("./Editing.png").default}
      />

      {/* Expande tu publico */}
      <Section
        title="Expande tu publico"
        paragraphs={[
          "Una de las mayores barreras que existen para que tu contenido no llegue a mas publicos es la barrera del idioma.",
          "[TITULO] te permite traducir tus textos a diferentes idiomas y asi poder llegar a mas gente que este interesada en tu contenido.",
        ]}
        imgURL={homeImages("./Public.png").default}
      />
    </>
  );
};
