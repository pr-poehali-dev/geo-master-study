import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const stats = [
    { label: "Активных пользователей", value: "12,450", icon: "Users" },
    { label: "Средний балл ЕГЭ", value: "87.3", icon: "Trophy" },
    { label: "Материалов", value: "450+", icon: "BookOpen" },
    { label: "Успешных выпускников", value: "98.7%", icon: "GraduationCap" },
  ];

  const sections = [
    {
      title: "Теория",
      description: "Полная теоретическая база по кодификатору ФИПИ",
      icon: "BookOpen",
      gradient: "from-education-blue to-education-light",
      features: ["Конспекты", "Интерактивные карты", "Схемы и таблицы"],
    },
    {
      title: "Пробные тесты ЕГЭ",
      description: "Полная симуляция экзамена с автопроверкой",
      icon: "FileText",
      gradient: "from-achievement-green to-education-blue",
      features: ["Таймер экзамена", "Мгновенный результат", "Разбор ошибок"],
    },
    {
      title: "Видеоуроки",
      description: "Записи вебинаров и короткие видеоуроки",
      icon: "Play",
      gradient: "from-highlight-amber to-achievement-green",
      features: ["Разборы заданий", "Сложные темы", "Живые вебинары"],
    },
    {
      title: "Личный кабинет",
      description: "Отслеживание прогресса и статистика",
      icon: "User",
      gradient: "from-education-light to-highlight-amber",
      features: ["Статистика прогресса", "Избранное", "Трекер целей"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-light via-white to-education-blue/5">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={32} className="text-education-blue" />
              <h1 className="text-2xl font-bold text-text-dark">ГеоЭксперт</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#theory" className="text-text-dark hover:text-education-blue transition-colors">Теория</a>
              <a href="#tests" className="text-text-dark hover:text-education-blue transition-colors">Тесты</a>
              <a href="#videos" className="text-text-dark hover:text-education-blue transition-colors">Видео</a>
              <a href="#profile" className="text-text-dark hover:text-education-blue transition-colors">Профиль</a>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-text-dark">Войти</Button>
              <Button className="bg-education-blue hover:bg-education-blue/90 text-white">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-education-blue/10 text-education-blue border-education-blue/20">
              🌍 Покори географию!
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-text-dark mb-6 animate-fade-in">
              Открой мир и сдай ЕГЭ на{" "}
              <span className="bg-gradient-to-r from-education-blue to-achievement-green bg-clip-text text-transparent">
                высший балл
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
              Все необходимые материалы и инструменты для системной, эффективной и интересной подготовки к ЕГЭ по географии
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Button size="lg" className="bg-education-blue hover:bg-education-blue/90 text-white px-8 py-4 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Начать подготовку
              </Button>
              <Button size="lg" variant="outline" className="border-education-blue text-education-blue hover:bg-education-blue hover:text-white px-8 py-4 text-lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Пробный тест
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="mt-16 animate-fade-in">
            <img 
              src="/img/8f1f501e-7235-4f79-809d-27e6da4a2b70.jpg" 
              alt="География и карты мира" 
              className="mx-auto rounded-2xl shadow-2xl max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-text-dark mb-12">
            Результаты говорят сами за себя
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-scale-in border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-education-blue to-achievement-green rounded-full">
                      <Icon name={stat.icon} size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-text-dark mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-dark mb-4">
              Все для успешной подготовки
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексная система обучения с современными методиками и интерактивными материалами
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${section.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r ${section.gradient} rounded-lg`}>
                      <Icon name={section.icon} size={20} className="text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-text-dark">{section.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-base">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {section.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-achievement-green" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-education-blue to-achievement-green hover:from-education-blue/90 hover:to-achievement-green/90 text-white">
                    Перейти к разделу
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-education-blue to-achievement-green">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Твой путь к успеху</h2>
            <p className="text-xl mb-12 opacity-90">
              Следи за прогрессом и достигай новых высот в изучении географии
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Icon name="Target" size={48} className="mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-2">Поставь цель</h3>
                <p className="opacity-90">Определи желаемый балл и составь план подготовки</p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Icon name="BookOpen" size={48} className="mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-2">Изучай материал</h3>
                <p className="opacity-90">Проходи теорию и решай практические задания</p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Icon name="Trophy" size={48} className="mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-2">Достигай результата</h3>
                <p className="opacity-90">Сдавай пробные тесты и получай высокий балл</p>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="bg-white/20 rounded-full p-1 backdrop-blur-sm max-w-md mx-auto">
                <div className="flex items-center justify-between px-4 py-2 text-sm">
                  <span>Прогресс подготовки</span>
                  <span>73%</span>
                </div>
                <Progress value={73} className="h-2 bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-text-dark mb-6">
              Готов покорить географию?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Присоединяйся к тысячам успешных выпускников и начни подготовку уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-education-blue hover:bg-education-blue/90 text-white px-8 py-4 text-lg">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="border-education-blue text-education-blue hover:bg-education-blue hover:text-white px-8 py-4 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-dark text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Globe" size={28} className="text-education-blue" />
                <span className="text-xl font-bold">ГеоЭксперт</span>
              </div>
              <p className="text-gray-400">
                Покори географию и сдай ЕГЭ на высший балл
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Обучение</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Теория</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пробные тесты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Видеоуроки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вебинары</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Phone" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ГеоЭксперт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;