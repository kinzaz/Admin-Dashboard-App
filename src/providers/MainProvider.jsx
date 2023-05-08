import React from 'react';
import { ColorModeContext, useMode } from '../theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';

const MainProvider = ({ children }) => {
	const [theme, colorMode] = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<ProSidebarProvider>
					<CssBaseline />
					{children}
				</ProSidebarProvider>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default MainProvider;
