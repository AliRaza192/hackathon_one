export interface NavbarItemType {
    label: string,
    href: string,
    isDropDown: boolean,
    DropDownData?: Array<NavbarItemType>,
}
 

export const NavbarArray: Array<NavbarItemType> = [
    {
        label: "Female",
        href: "/female/female",
        isDropDown: true,
        DropDownData: [
            {
                label: "Dresses",
                href: "/female/dresses",
                isDropDown: false             
            },
            {
                label: "T-Shirts",
                href: "/female/t-shirts",
                isDropDown: false                             
            },
            {
                label: "Pents",
                href: "/female/pents",
                isDropDown: false             
            },
            {
                label: "Sweater",
                href: "/female/sweater",
                isDropDown: false                             
            },
        ]
    },
    {
        label: "Male",
        href: "/male",
        isDropDown: true,
        DropDownData: [
            {
                label: "Sweater",
                href: "/male/sweater",
                isDropDown: false,             
            },
            {
                label: "Jackets",
                href: "/male/jackets",
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