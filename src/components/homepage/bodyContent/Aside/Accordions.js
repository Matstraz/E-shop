import { Accordion, Rating } from "flowbite-react";

export default function Accordions() {
  return (
    <div className="mt-12">
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>
            <p className="font-bold text-lg text-black">Shipping Rules</p>
          </Accordion.Title>
          <Accordion.Content>
            <p className="my-5 px-2">Lorem ipsum dolor sic amet</p>
            <ul className="list-disc px-2">
              <li className="text-sm text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam veniam adipisci tenetur consequatur porro magni.
                <a href="/" className="font-bold">
                  Generic Link
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            <div className="flex justify-around items-center">
              <p className="font-bold text-lg text-black pr-3">Ratings(4)</p>
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <div className="flex justify-between">
              <div className="font-bold">UserNumber1(93)</div>
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
              </Rating>
            </div>
            <div className="flex justify-between">
              <div className="font-bold">UserNumber2(62)</div>
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
            </div>
            <div className="flex justify-between">
              <div className="font-bold">UserNumber3(7)</div>
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
                <Rating.Star filled={false} />
              </Rating>
            </div>
            <div className="flex justify-between">
              <div className="font-bold">UserNumber4(80)</div>
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
