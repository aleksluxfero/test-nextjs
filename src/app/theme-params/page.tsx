'use client';

import { useSignal, themeParams } from '@telegram-apps/sdk-react';
import { List } from '@telegram-apps/telegram-ui';

import { DisplayData } from '@/components/DisplayData/DisplayData';
import { Page } from '@/components/Page';
import {useEffect} from "react";
import {Link} from "@/components/Link/Link";

export default function ThemeParamsPage() {
  const tp = useSignal(themeParams.state);

  useEffect(() => {
    console.log("effect");
  }, [])

  return (
    <div>
      <List>
        <DisplayData
          rows={
            Object
              .entries(tp)
              .map(([title, value]) => ({
                title: title
                  .replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`)
                  .replace(/background/, 'bg'),
                value,
              }))
          }
        />
      </List>
      <Link href="/">На главную</Link>
    </div>
  );
};
