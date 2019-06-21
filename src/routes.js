import showBlogs from './components/showBlogs.vue' 
import addBlog from './components/addBlog.vue' 
import addVendors from './components/addVendors.vue' 

export default[
    {path:"/", component:showBlogs},
    {path:"/add",component:addBlog},
    {path:"/add-vendor",component:addVendors}
]