import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const apiKey ='Og6IJPRlrI8apuXYyUkUisYXT1Tm4rso';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories={setCategories} 
                onNewCategory= { onAddCategory }
            />

            { 
                categories.map(category => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
        </>
    );
}