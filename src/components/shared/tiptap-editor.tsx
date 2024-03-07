import {
  FloatingMenu,
  BubbleMenu,
  useEditor,
  EditorContent,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';

// define your extension array
const extensions = [StarterKit, ImageExtension];

const content = '<p>Hello World!</p>';

const Tiptap = () => {
  ImageExtension.configure({
    allowBase64: true,
  });

  const editor = useEditor({
    extensions: extensions,
    content: content,
  });

  const handleBoldButtonClick = () => {
    editor?.chain().focus().toggleBold().run();
  };

  const handleInsertImageButtonClick = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      const file = input.files ? input.files[0] : null;

      if (file) {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          if (typeof e?.target?.result === 'string') {
            editor?.chain().focus().setImage({ src: e.target.result }).run();
          }
        };
        fileReader.readAsDataURL(file);
      }
    };
  };

  if (!editor) {
    return null;
  }

  return (
    <>
      <EditorContent editor={editor}></EditorContent>
      <FloatingMenu editor={editor!} className="bg-base-300 p-2">
        <button
          className="rounded-md bg-emerald-400 p-1"
          onClick={handleInsertImageButtonClick}
        >
          Add Img
        </button>
      </FloatingMenu>
      <BubbleMenu editor={editor!} className="bg-base-600 p-2">
        <button
          className="rounded-md bg-pink-500 p-1"
          onClick={handleBoldButtonClick}
        >
          Bold
        </button>
      </BubbleMenu>
    </>
  );
};

export default Tiptap;
