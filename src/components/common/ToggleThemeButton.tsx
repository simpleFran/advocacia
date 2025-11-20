/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useColorScheme } from '@mui/material/styles';
import React from 'react';

export const ToggleThemeButton = () => {
    const { mode, setMode } = useColorScheme();

  return (
   <React.Fragment>
    <select
      value={mode}
      onChange={(event) => {
        setMode(event.target.value as any);
        // For TypeScript, cast `event.target.value as 'light' | 'dark' | 'system'`:
      }}
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
        {/* <IconButton></IconButton> */}
   </React.Fragment>
  )
}
