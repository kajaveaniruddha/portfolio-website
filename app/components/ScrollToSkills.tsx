"use client";
import { IconArrowUp, IconArrowDown } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition, rem } from "@mantine/core";

export default function ScrollToSkills() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y < 2000}>
          {(transitionStyles) => (
            <Button
              leftSection={
                <IconArrowDown style={{ width: rem(16), height: rem(16) }} />
              }
              style={transitionStyles}
              onClick={() => scrollTo({ y: 3000 })}
              variant="outline"
              color="black"
            >
              Skills
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export function ScrollTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ top: 20, right: 20 }}>
        <Transition transition="slide-down" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={
                <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
              }
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              variant="outline"
              color="black"
            >
              Top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
