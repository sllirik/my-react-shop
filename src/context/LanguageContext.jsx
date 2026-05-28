import { useContext, useState } from "react";
import { createContext } from "react";

// Контекст-контейнер
export const LanguageContext = createContext(null);

// Провайдер
export const LanguageProvider = ({children}) => {

	const [language, setLanguage] = useState('ru');

	// Функция изменения значения
	const toggleLanguage = () => {
		setLanguage(prev => prev === 'ru' ? 'en' : 'ru')
	}

	// Что передаём в контексте
	const contextValue = {
		language,
		toggleLanguage
	}

	return (
		<LanguageContext.Provider value={contextValue}>
			{children}
		</LanguageContext.Provider>
	)
}




export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if(!context) {
		throw new Error("Что-то не то");
	}
	return context;
}
