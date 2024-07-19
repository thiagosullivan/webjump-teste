// eslint-disable-next-line react/prop-types
export function Breadcrumb({ pageName }){
    return (
        <div className="breadcrumb">
            <a href="/">Página Inicial</a>
            <span>&#62;</span>
            <p>{pageName}</p>
        </div>
    )
}