const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' });
app.use(express.json());

app.post('/detect', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileUrl = `http://localhost:8080/uploads/${req.file.filename}`;
    res.json({ annotated_image: fileUrl, objects: ["apple", "orange", "kiwi"] });
});

app.post('/recipes/suggest', (req, res) => {
    const { ingredients } = req.body;

    if (!ingredients || ingredients.length === 0) {
        return res.status(400).json({ error: 'Ingredients are required' });
    }

    const recipes = [
        {
            title: "Курица с рисом",
            ingredients: [
                "Курица - 200г",
                "Рис - 150г",
                "Лук - 1 шт",
                "Чеснок - 2 зубчика",
                "Соевый соус - 2 ст. ложки"
            ],
            steps: [
                "Отварить рис до готовности.",
                "Обжарить лук и чеснок на сковороде.",
                "Добавить курицу, обжарить до золотистой корочки.",
                "Добавить отваренный рис и соевый соус, перемешать.",
                "Готовить 5 минут на среднем огне."
            ],
            image_url: "https://example.com/recipes/chicken_rice.jpg"
        },
        {
            title: "Салат Цезарь",
            ingredients: [
                "Куриное филе - 200г",
                "Салат ромэн - 100г",
                "Пармезан - 50г",
                "Крутоны - по вкусу",
                "Соус Цезарь - по вкусу"
            ],
            steps: [
                "Обжарить куриное филе до готовности.",
                "Порезать салат и добавить в глубокую миску.",
                "Добавить обжаренное филе, крутоны и тертый пармезан.",
                "Заправить соусом и перемешать."
            ],
            image_url: "https://example.com/recipes/caesar_salad.jpg"
        }]

    res.json(recipes);
});


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});