const express = require('express');
const builtinMiddleware = require('./middleware/builtinMiddleware');
const applicationMiddleware = require('./middleware/applicationMiddleware');
const configurableMiddleware = require('./middleware/configurableMiddleware');
const routerMiddleware = require('./middleware/routerMiddleware');

const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(applicationMiddleware.commonMiddleware);
app.use(builtinMiddleware);
app.use(routerMiddleware);
app.use(configurableMiddleware({ param1: 'value1', param2: 'value2' }));


app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
