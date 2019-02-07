# JavaScript Flashcards (флэш – карты JavaScript)

## Введение
Мы собираемся создать приложение для флэш-карт, которое работает в точности как приложение, показанное на Рисунке 1, однако нет необходимости создавать его точную копию. У нас другая задача – сосредоточиться на написании элегантного, объектно-ориентированного кода, не забывая при этом о дизайнерских решениях и об отборе лучших методов действий.

![flashcards animation](readme-assets/flashcards-animation.gif)

*Рисунок 1*. Пример реализации флэш-карты.


### Model-View-Controller
Мы собираемся разработать наш код таким образом, чтобы следовать Model-View-Controller [Model-View-Controller][wikipedia mvc] (MVC)[шаблон дизайна][шаблон дизайна Википедия]. Прежде чем мы начнем выполнять releases, нужно убедиться в том, что мы можем ответить на следующие вопросы.

- Что представляет собой Model?
- Как используется View?
- В чем заключаются обязанности Controller?


## Releases
### Pre-release: описание и дизайн приложения
Прежде чем мы начнем писать наш код, давайте договоримся о том, как мы будем выстраивать наше приложение. Как выглядит наша игра с колодой флэш -карт – от момента загрузки данных в файл до проверки того, верна ли наша догадка? Что должно происходить? Как было указано во *Введении*, наше приложение должно работать так, как было показано на Рисунке 1, но не обязательно должно быть его точной копией:   например, мы можем дать пользователям не одну, а несколько попыток  для того, чтобы отгадать карточку.

Когда у нас сформируется четкое понимание того, что должно происходить, тогда можно приступать к разработке проекта приложения. Мы должны иметь возможность нарисовать или написать черновой вариант объектов, которые мы собираемся получить (т. е. наши модели данных), их взаимодействие между собой, а также общий поток (ход) нашей программы.

Этот release занимает приблизительно 15-20 минут. Если это займет больше времени, и вы почувствовали, что застряли, то найдите человека, который поможет вам справиться с возникшей проблемой.

### Release 0: Построение шаблона Model-View-Controller

Когда мы находимся на странице, связанной с выбором дизайна для нашего карточного приложения, мы начинаем заниматься его построением. У нас есть несколько примеров файлов данных (например, `nighthawk_flashcard_data.txt`), и пользователь должен иметь возможность воспользоваться и работать с любым из этих файлов.

При выполнении задания, следуйте как можно точнее шаблону проектирования MVC. Наша реализация, скорее всего, будет отличаться от реализации других команд, и это нормально. Важно понимать, насколько хорошо мы структурируем наш код для представления абстрактной концепции шаблона проектирования.

*Примечание:* Здесь представлен[пример реализации MVC][пример реализации mvc] для приложения, связанного с больницей.

## Заключение
Подумайте о решениях, которые мы принимали во время выполнении этой задачи. Каковы были результаты от дизайнерских решений, принятых нами в *Pre-release*, когда мы только начали разрабатывать наше приложение? Упростили ли они нашу работу по шаблону проектирования MVC? Что изменилось и  что осталось от нашего первоначального дизайна?

Насколько гибким является наш код? Легко ли он адаптируется? Сколько объектов нужно будет изменить, если мы вносем изменения в наш код? Например, что происходит, если мы хотим поддерживать запросы, предполагающие выбор из нескольких вариантов ответа? Что делать, если мы изменили файл хранилища данных?

Какие знания и навыки мы можем использовать и применить к нашему будущему коду?

[пример реализации mvc]: readme-assets/mvc-hospital-example.md
[шаблон дизайна Википедия]: http://en.wikipedia.org/wiki/Software_design_pattern
[wikipedia mvc]: https://ru.wikipedia.org/wiki/Model-View-Controller



### Eng 


## Summary 
We're going to build a flashcard application that functions like the application shown in Figure 1—it's not necessary to build an exact copy.  As always, write elegant, object-oriented code, thinking through design decisions and making judgements on the best courses of action.

![flashcards animation](readme-assets/flashcards-animation.gif)  
*Figure 1*.  Example flashcard implementation.


### Model-View-Controller
We're going to design our code to follow the [Model-View-Controller][wikipedia mvc] (MVC) [design pattern][wikipedia design pattern].  Before we begin with the releases, ensure we can answer the following questions.

- What does a model represent?
- How is the view used?
- What is the responsibility of a controller?


## Releases
### Pre-release: Describe and Design the Application
Before we begin to code, let's agree on what we're building.  From loading the data in a file to checking if a guess is correct, what does playing a deck of flashcards look like?  What all needs to happen?   As was stated in the *Summary*, our application should function like the example in Figure 1, but it does not need to be an exact copy—for example, we might want to allow users multiple guesses per card.

Once we have a solid understanding of what needs to happen, develop a design for the application.  We should be able to draw or write a rough sketch of the objects we anticipate needing (i.e., our data models), how they interact, and the overall flow of our program.

This release should take roughly 15 - 20 minutes.  If it's taking longer, find an instructor to get unstuck.


### Release 0: Build Following Model-View-Controller Pattern
Once we're on the same page regarding the design of our flashcard application, it's time to build it.  We have a few example data files (e.g., `nighthawk_flashcard_data.txt`), and a user should be able to play any of these files.

As best we can, follow the MVC design pattern.  Our implementation will likely differ from our cohort mates' implementations; that's okay.  The important thing to consider is how well we structure our code to represent the abstract concept of a design pattern.

*Note:* Here's an [example MVC implementation][] for a hospital-related application.


## Conclusion
Reflect back on the decisions we made in completing this challenge.  How did the design decisions that we made in the *Pre-release* hold up as we began to develop our application?  Did they facilitate the MVC design pattern?  What changed and what remained from our original design?  

How flexible is our code?  Is it easily adaptable?  If we made changes to our code, how many objects would need to be modified?  For example, what if we wanted to support multiple choice questions?  What if we changed the data store file?

What learnings can we take forward and apply to our future code?


