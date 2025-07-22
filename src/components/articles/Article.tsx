
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Clock, User, Share2, BookOpen } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchArticleById } from '@/store/articleSlice';

const Article = () => {
   const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { articleById, loading, error } = useSelector((state: RootState) => state.articles);

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(Number(id)));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>טוען מאמר...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>שגיאה בטעינת המאמר: {error}</p>
      </div>
    );
  }

  if (!articleById) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        <p>לא נמצא מאמר עם מזהה זה</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-white/70 via-gray-50 to-white/70">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <h1 className="text-3xl font-bold text-violet-700 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-emerald-500" />
            {articleById.title}
          </h1>
          <img
            src={articleById.backgroundUrl}
            alt={articleById.title}
            className="w-full rounded-xl max-h-[400px] object-cover"
          />
          <p className="text-sm text-gray-500">
            זמן קריאה מוערך: {articleById.readTime} דקות
          </p>
          <div className="prose max-w-none text-gray-800" dir="rtl">
            {articleById.content}
          </div>
        </div>
      </div>
    </div>
  );
};
//   const { id } = useParams();
//   const dispatch = useDispatch<AppDispatch>();
//   const { article } = useSelector(
//     (state: RootState) => state.articles
//   );

//   useEffect(() => {
//     dispatch(fetchArticleById(parseInt(id)));
//   }, []);

//   return (
//     <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
//       <div className="absolute inset-0">
//         <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-float" 
//              style={{ animationDelay: '0s' }} />
//         <div className="absolute bottom-32 left-20 w-[500px] h-[500px] bg-violet-500/8 rounde[d-full blur-3xl animate-float" 
//              style={{ animationDelay: '3s' }} />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl animate-float" 
//              style={{ animationDelay: '6s' }} />
        
//         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-bounce-subtle" 
//              style={{ animationDelay: '1s' }} />
//         <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-violet-400 rounded-full animate-bounce-subtle" 
//              style={{ animationDelay: '2s' }} />
//         <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gray-400 rounded-full animate-bounce-subtle" 
//              style={{ animationDelay: '4s' }} />
//       </div>

//       <div className="container mx-auto px-4 py-8 relative z-10">
//         <Link to="/articles">
//           <Button variant="outline" className="mb-6 hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-violet-50/40 bg-gradient-to-r from-white/90 to-gray-50/80 backdrop-blur-sm border border-white/60">
//             <ArrowLeft className="w-4 h-4 ml-2" />
//             חזרה למאמרים
//           </Button>
//         </Link>
//       </div>

//       <section className="container mx-auto px-4 mb-12 relative z-10">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-gradient-to-br from-white/90 via-gray-50/80 to-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/60">
//             <div className="relative h-64 md:h-80">
//               <img 
//                 src={article.image} 
//                 alt={article.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//               <div className="absolute bottom-6 right-6 bg-gradient-to-r from-white/95 via-gray-50/98 to-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-emerald-600 border border-emerald-200/60">
//                 {article.category}
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 to-violet-600"></div>
//             </div>
            
//             <div className="p-8">
//               <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
//                 {article.title}
//               </h1>
              
//               <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
//                 <div className="flex items-center space-x-2 rtl:space-x-reverse">
//                   <User className="w-5 h-5" />
//                   <span className="font-medium">{article.author}</span>
//                 </div>
//                 <div className="flex items-center space-x-2 rtl:space-x-reverse">
//                   <Clock className="w-5 h-5" />
//                   <span>{article.readTime} קריאה</span>
//                 </div>
//                 <div className="flex items-center space-x-2 rtl:space-x-reverse">
//                   <BookOpen className="w-5 h-5" />
//                   <span>{article.publishDate}</span>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between border-t pt-6">
//                 <div className="flex flex-wrap gap-2">
//                   {article.tags.map((tag, index) => (
//                     <span key={index} className="bg-gradient-to-r from-gray-100/80 to-gray-50/90 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200/60">
//                       #{tag}
//                     </span>
//                   ))}
//                 </div>
//                 <Button variant="outline" className="hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-violet-50/40 bg-gradient-to-r from-white/90 to-gray-50/80 backdrop-blur-sm border border-white/60">
//                   <Share2 className="w-4 h-4 ml-2" />
//                   שתף
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="container mx-auto px-4 mb-16 relative z-10">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-gradient-to-br from-white/90 via-gray-50/80 to-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 border border-white/60">
//             <div 
//               className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
//               dangerouslySetInnerHTML={{ __html: article.content }}
//               style={{
//                 direction: 'rtl',
//                 textAlign: 'right'
//               }}
//             />
//           </div>
//         </div>
//       </section>

//       {(prevArticle || nextArticle) && (
//         <section className="container mx-auto px-4 mb-16 relative z-10">
//           <div className="max-w-4xl mx-auto">
//             <div className="bg-gradient-to-br from-white/90 via-gray-50/80 to-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/60">
//               <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">ניווט במאמרים - {article.category}</h3>
//               <div className="flex justify-between items-center gap-4">
//                 <div className="flex-1">
//                   {prevArticle ? (
//                     <Link to={`/article/${prevArticle.id}`}>
//                       <Button variant="outline" className="w-full h-auto p-4 text-right hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-violet-50/40 group bg-gradient-to-r from-white/90 to-gray-50/80 backdrop-blur-sm border border-white/60">
//                         <div className="flex items-center justify-between w-full">
//                           <ArrowRight className="w-5 h-5 text-violet-600 group-hover:translate-x-1 transition-transform" />
//                           <div className="text-right">
//                             <div className="text-sm text-gray-500 mb-1">המאמר הקודם</div>
//                             <div className="font-medium text-gray-800 line-clamp-2">{prevArticle.title}</div>
//                           </div>
//                         </div>
//                       </Button>
//                     </Link>
//                   ) : (
//                     <div className="w-full h-auto p-4 text-center text-gray-400 bg-gradient-to-r from-gray-50/50 to-white/80 rounded-lg border border-gray-200/60">
//                       זה המאמר הראשון בקטגוריה
//                     </div>
//                   )}
//                 </div>

//                 <div className="w-px h-16 bg-gray-200"></div>

//                 <div className="flex-1">
//                   {nextArticle ? (
//                     <Link to={`/article/${nextArticle.id}`}>
//                       <Button variant="outline" className="w-full h-auto p-4 text-left hover:bg-gradient-to-r hover:from-violet-50/40 hover:to-gray-50/80 group bg-gradient-to-r from-white/90 to-gray-50/80 backdrop-blur-sm border border-white/60">
//                         <div className="flex items-center justify-between w-full">
//                           <div className="text-left">
//                             <div className="text-sm text-gray-500 mb-1">המאמר הבא</div>
//                             <div className="font-medium text-gray-800 line-clamp-2">{nextArticle.title}</div>
//                           </div>
//                           <ArrowLeft className="w-5 h-5 text-violet-600 group-hover:-translate-x-1 transition-transform" />
//                         </div>
//                       </Button>
//                     </Link>
//                   ) : (
//                     <div className="w-full h-auto p-4 text-center text-gray-400 bg-gradient-to-r from-gray-50/50 to-white/80 rounded-lg border border-gray-200/60">
//                       זה המאמר האחרון בקטגוריה
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

export default Article;
