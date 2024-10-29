'use client';

import { useLaunchParams } from '@telegram-apps/sdk-react';
import { List } from '@telegram-apps/telegram-ui';

import { DisplayData } from '@/components/DisplayData/DisplayData';
import {useEffect} from "react";
import {Link} from "@/components/Link/Link";

export default function LaunchParamsPage() {
  const lp = useLaunchParams();

  useEffect(() => {
    console.log("effect");
  }, [])

  return (
    <div>
      <List>
        <DisplayData
          rows={[
            { title: 'tgWebAppPlatform', value: lp.platform },
            { title: 'tgWebAppShowSettings', value: lp.showSettings },
            { title: 'tgWebAppVersion', value: lp.version },
            { title: 'tgWebAppBotInline', value: lp.botInline },
            { title: 'tgWebAppStartParam', value: lp.startParam },
            { title: 'tgWebAppData', type: 'link', value: '/init-data' },
            {
              title: 'tgWebAppThemeParams',
              type: 'link',
              value: '/theme-params',
            },
          ]}
        />
      </List>
      <Link href="/">На главную</Link>
    </div>
  );
};
