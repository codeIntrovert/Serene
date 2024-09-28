import * as FileSystem from 'expo-file-system';

const saveFile = async (fileName: string, content: string) => {
    const path = `${FileSystem.documentDirectory}${fileName}`;
    try {
        await FileSystem.writeAsStringAsync(path, content, { encoding: FileSystem.EncodingType.UTF8 });
        return path;
    } catch (error) {
        console.error('File save error: ', error);
        throw error;
    }
};

const readFile = async (fileName: string) => {
    const path = `${FileSystem.documentDirectory}${fileName}`;
    try {
        const content = await FileSystem.readAsStringAsync(path, { encoding: FileSystem.EncodingType.UTF8 });
        return content;
    } catch (error) {
        console.error('File read error: ', error);
        return null;
    }
};

export { saveFile, readFile };
