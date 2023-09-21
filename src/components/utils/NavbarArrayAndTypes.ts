export interface NavbarItemType {
    label: string,
    href: string,
    isDropDown: boolean,
    DropDownData?: Array<NavbarItemType>,
}
 

export const NavbarArray: Array<NavbarItemType> = [
    {
        label: "Female",
        href: "/female/Female",
        isDropDown: true,
        DropDownData: [
            {
                label: "Dresses",
                href: "/female/Dresses",
                isDropDown: false             
            },
            {
                label: "T-Shirts",
                href: "/female/T-shirts",
                isDropDown: false                             
            },
            {
                label: "Pents",
                href: "/female/Pents",
                isDropDown: false             
            },
            {
                label: "Sweater",
                href: "/female/Sweater",
                isDropDown: false                             
            },
        ]
    },
    {
        label: "Male",
        href: "/male/male",
        isDropDown: true,
        DropDownData: [
            {
                label: "Sweater",
                href: "/male/Sweater",
                isDropDown: false,             
            },
            {
                label: "Jackets",
                href: "/male/Jackets",
                isDropDown: false             
            }
        ]
    },
    {
        label: "Kids",
        href: "/kids",
        isDropDown: false
    },
    {
        label: "All Products",
        href: "/allproducts",
        isDropDown: false
    }
]