import React, { useEffect, useState, type ReactNode } from "react";

interface DataSourceProps {
  getDataFunc?: () => void;
  resourceName: string;
  children: ReactNode;
}

const DataSource = ({
  getDataFunc = () => {},
  resourceName,
  children,
}: DataSourceProps) => {
  const [state, setState] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getDataFunc();
        setState(data);
        console.log(data);
      } catch {
        setError("Failed to fetch the data");
      }
    })();
  }, [getDataFunc]);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              [resourceName]: state,
            });
          }
          return child;
        })
      )}
    </>
  );
};

export default DataSource;
