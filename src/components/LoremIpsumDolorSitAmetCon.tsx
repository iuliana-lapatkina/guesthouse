import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const LoremIpsumDolorSitAmetCon: FunctionComponent = () => {
  return (
    <section className="self-stretch h-[410px] relative bg-floralwhite shrink-0 [debug_commit:f6aba90] text-left text-smi text-darkslategray font-montserrat">
      <div className="absolute w-full top-[0px] right-[0%] left-[0%] bg-floralwhite h-full hidden" />
      <div className="absolute top-[100px] left-[699px] bg-peru w-[42px] h-2 z-[1]" />
      <div className="absolute top-[141px] left-[736px] leading-[20px] inline-block w-[343px] z-[1]">
        Below you'll find information about the accommodation and what's
        included in the price. Don't hesitate to reach out to us vi the contact
        page if you have any questions around your stay.
      </div>
      <Button
        className="absolute top-[262px] left-[736px] z-[1]"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "14",
          background: "#52503b",
          borderRadius: "6px",
          "&:hover": { background: "#52503b" },
          width: 107,
          height: 42,
        }}
      >
        Book now
      </Button>
      <div className="absolute top-[141px] left-[336px] text-sm leading-[20px] inline-block w-[360px] z-[1]">
        The Guest House is the perfect weekend get-away housing. Located in the
        Norwegian archipelago, Lofoten, it's a great escape from the hustle and
        bustle of the city. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat
        eros quis consectetur. Morbi neque ex, condimentum dapibus congue et,
        vulputate ut ligula.
      </div>
    </section>
  );
};

export default LoremIpsumDolorSitAmetCon;
